import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
/* ***package imports above this***  */

import AppLayout from "@shared/components/organisms/app-layout";
import HomeRouteObject from "./home";
import PackageRoutes from "./package";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function App() {
  /* ***props decustructions above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  const routeList = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [HomeRouteObject, PackageRoutes],
      },
    ]);
  }, []);
  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <StyleProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#005eae",
            fontFamily: "Epilogue, sans-serif",
          },
        }}
      >
        <RouterProvider router={routeList} />
      </ConfigProvider>
    </StyleProvider>
  );
}
