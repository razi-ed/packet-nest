import React from "react";
import { Switch } from "react-router-dom";
/* ***package imports above this***  */

import AppLayout from "@/modules/shared/components/antd/organisms/layout-v2";
import ProtectedRoute from "@/modules/shared/components/antd/organisms/protected-route";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***data(redux) imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IHomeRoutesProps {}

/* ***local declarations above this***  */

export default function HomeRoutes(props: IHomeRoutesProps) {
  return (
    <AppLayout>
      {/* <Switch>
        <ProtectedRoute
          key={""}
          path={""}
          // component={}
          exact
        />
      </Switch> */}
    </AppLayout>
  );
}

HomeRoutes.defaultProps = {};
