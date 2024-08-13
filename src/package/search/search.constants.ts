import { SearchOutlined } from "@ant-design/icons";

import { moduleName } from "@package/package.constants";
import { SearchErrorHandle, SortOption } from "@package/package.type";

export const subModuleName = "search";

const routePath = `${subModuleName}`;
const path = `/${moduleName}/${subModuleName}`;
const linkLabel = "Search Package";
const linkKey = `${moduleName}`;
const linkIcon = SearchOutlined;
export const SEARCH_DEBOUNCE_DELAY = 700;

export enum SearchParamsKeys {
  QUERY = "q",
  SORT = "sort",
  PAGE = "page",
}

export enum SearchParamsDefaultValues {
  QUERY = "react",
  SORT = "rank",
  PAGE = "1",
  TOTAL = "0",
}

export const ResultsSortOptions: SortOption[] = [
  { label: "Relevance", value: "" },
  { label: "Rank", value: "rank" },
  { label: "Stars", value: "stars" },
  { label: "Dependents", value: "dependent_repos_count" },
];

export const SearchErrorHandleObject: SearchErrorHandle = {
  404: {
    errStatus: 404,
    errMessage: "Resource not Found",
  },
  500: {
    errStatus: 500,
    errMessage: "Oops...",
  },
  403: {
    errStatus: 403,
    errMessage: "Unauthorized!",
  },
};

export const ITEMS_PER_PAGE =
  parseInt(import.meta.env.VITE_ITEMS_PER_PAGE, 10) || 5;

/**
 * NOTE:
 * The API returns errors when the 'page' value exceeds '300'.
 * To prevent these errors, we are hardcoding the value not to go beyond '300'.
 */
export const MAX_PAGE_ALLOWED =
  parseInt(import.meta.env.VITE_MAX_PAGE_ALLOWED, 10) || 300;

export const MAX_TOTAL_ITEMS_ALLOWED = ITEMS_PER_PAGE * MAX_PAGE_ALLOWED;

export const SearchNavObject = {
  path,
  routePath,
  linkLabel,
  linkKey,
  linkIcon,
};

export default SearchNavObject;
