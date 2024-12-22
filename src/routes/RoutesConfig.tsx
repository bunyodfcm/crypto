import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const RoutesConfig = [
  {
    path: "/",
    element: <Home />,
    status: true,
  },
  {
    path: "/login",
    element: <Login />,
    status: true,
  },
];

export default RoutesConfig;
