export const subModuleName = "list";

import { moduleName } from '../package.enum';

const routePath = `${subModuleName}`;
const linkLabel = 'List';
const linkLabelKey = 'ADD_I18N_KEY_HERE'; // for layout side nav
const linkKey = `${moduleName}`;

export const ListNavObject = {
  routePath,
  linkLabel,
  linkLabelKey,
  linkKey,
};

export default ListNavObject;
