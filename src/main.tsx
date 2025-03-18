import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./1app/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {AppProvider} from './1app/providers/AppProvider.tsx'



createRoot(document.getElementById("root")!).render(

    <AppProvider>
      <Router>
        <App />
        <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
      </Router>
    </AppProvider>

);
