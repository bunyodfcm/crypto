import { Route, Routes } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";

const AppRoutes = () => {
  return (
    <Routes>
      {RoutesConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
