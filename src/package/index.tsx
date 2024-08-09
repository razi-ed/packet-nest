import { Outlet } from 'react-router-dom';

import ListPage from './list';

import PackageNavObject from './package.enum';
import ListNavObject from './list/list.enum';

const PackageRouteObject = {
  path: PackageNavObject.routePath,
  element: <Outlet />,
  children: [
    {
      path: ListNavObject.routePath,
      element: <ListPage />
    }
  ]
};

export default PackageRouteObject 
