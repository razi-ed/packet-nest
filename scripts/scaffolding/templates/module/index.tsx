import { moduleName } from "./__name__.enum";
import RouteComponent from "./__name__.routes";
export { default as __Name__Reducer } from "./__name__.data";

const linkLabel = "__Name__";
const routePath = `/${moduleName}`;
const linkLabelKey = "ADD_I18N_KEY_HERE"; // for layout side nav
const linkKey = `${moduleName}`;

export const __Name__RouteObject = {
  routePath,
  linkLabel,
  linkLabelKey,
  linkKey,
};

export default RouteComponent;
