import { HomeOutlined } from "@ant-design/icons";

export const moduleName = "home";

const linkLabel = "Home";
const routePath = `/${moduleName}`;
const path = `/${moduleName}`;
const linkKey = `${moduleName}`;

export const HomeNavObject = {
  path,
  routePath,
  linkLabel,
  linkKey,
  linkIcon: HomeOutlined,
};

export default HomeNavObject;
