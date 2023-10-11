import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { StoreProvider } from "@/app/providers/rtk-query-provider";
import { router } from "./app/providers/react-router-provider";

import "@/app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>,
);
