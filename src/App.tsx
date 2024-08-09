import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* ***package imports above this***  */

import AppLayout from './shared/components/organisms/app-layout';
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***data(redux) imports above this***  */

import PackageRoutes from './package';
/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function App() {
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  const routeList = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [
          PackageRoutes
        ]
      },
    ])
  }, []);

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return <RouterProvider router={routeList}/>
}
