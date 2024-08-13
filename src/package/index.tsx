import { Outlet } from "react-router-dom";

import SearchPage from "./search";

import PackageNavObject from "./package.constants";
import ListNavObject from "./search/search.constants";
import Error from "@shared/components/molecules/error";

const PackageRouteObject = {
  path: PackageNavObject.routePath,
  element: <Outlet />,
  errorElement: (
    <Error code={404} error={"The page you are looking for does not exist."} />
  ),
  children: [
    {
      path: ListNavObject.routePath,
      element: <SearchPage />,
      errorElement: (
        <Error
          code={404}
          error={"The page you are looking for does not exist."}
        />
      ),
    },
  ],
};

export default PackageRouteObject;
