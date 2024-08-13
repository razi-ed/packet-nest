import PageComponent from "./__name__.page";

import { subModuleName as SubRoute } from "./__name__.enum";
import { moduleName } from "../__module-name__.enum";

const routePath = `/${moduleName}/${SubRoute}`;
const linkLabel = "__Name__";
const linkLabelKey = "ADD_I18N_KEY_HERE"; // for layout side nav
const linkKey = `${moduleName}`;

export const __Name__RouteObject = {
  routePath,
  linkLabel,
  linkLabelKey,
  linkKey,
};

export default PageComponent;
