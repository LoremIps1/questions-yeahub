import { router } from "@/app/providers/router/router";
import { RouterProvider } from "react-router-dom";

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
