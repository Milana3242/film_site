import { router } from "./app/router";
import { RouterProvider } from "@tanstack/react-router";
import { AppProvider } from "./app/app-provider";
import { AppLoader } from "./app/app-loader";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <AppLoader>
      <RouterProvider router={router} />
    </AppLoader>
  </AppProvider>
);
