import { Outlet } from "react-router-dom";

import SearchPage from "./search";

import PackageNavObject from "./package.constants";
import ListNavObject from "./search/search.constants";

const PackageRouteObject = {
  path: PackageNavObject.routePath,
  element: <Outlet />,
  children: [
    {
      path: ListNavObject.routePath,
      element: <SearchPage />,
    },
  ],
};

export default PackageRouteObject;
