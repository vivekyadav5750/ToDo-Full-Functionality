import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
// import ProtectedRoutes from "./protectedRoutes";
import Login from "./pages/login";
import Todos from "./pages/todos";
import Register from "./pages/register";

const routes = () => createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Todos /> },
        { path: "/signin", element: <Login /> },
        { path: "/signup", element: <Register /> },
      ],
    },
  ]);
  
export default routes;
