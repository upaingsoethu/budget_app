import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main, { MainLoader } from "./layouts/Main";
import Dashboard, { DashboardAction, DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        path : "/",
        element: <Dashboard />,
        loader: DashboardLoader,
        action: DashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};
