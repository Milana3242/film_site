import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Main } from "../pageFlat/Main";
import { SignIn } from "../pageFlat/Authorization/SignIn";
import { AllFilmsRender } from "../pageFlat/FilmsRender/AllFilmsRender";
import { OneFilmRender } from "../pageFlat/FilmsRender/OneFilmRender";
import { SignUp } from "../pageFlat/Authorization/SignUp";
const PrivateRoute = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  const authData = localStorage.getItem("auth-data");
  const isAuthenticated = authData ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return <Component />;
};

const rootRoute = createRootRoute();

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: DefaultLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: Main,
});

const signInRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/auth/signin",
  component: SignIn,
});

const signUpRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/auth/signup",
  component: SignUp,
});

const filmsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/films",
  component: AllFilmsRender,
});

const filmRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/films/$filmId",
  component: OneFilmRender,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    signInRoute,
    signUpRoute,
    filmsRoute,
    filmRoute,
  ]),
]);

export const router = createRouter({ routeTree });

// Декларируем типы для роутера
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
