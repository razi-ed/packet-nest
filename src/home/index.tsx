import { moduleName } from "./home.enum";
import RouteComponent from "./home.routes";
export { default as HomeReducer } from "./home.data";

const linkLabel = "Home";
const routePath = `/${moduleName}`;
const linkLabelKey = "ADD_I18N_KEY_HERE"; // for layout side nav
const linkKey = `${moduleName}`;

export const HomeRouteObject = {
  routePath,
  linkLabel,
  linkLabelKey,
  linkKey,
};

export default RouteComponent;
