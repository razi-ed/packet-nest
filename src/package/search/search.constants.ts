import { SearchOutlined } from "@ant-design/icons";

import { moduleName } from "@package/package.constants";
import { SortOption } from "@package/package.type";

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
  LANGUAGE = "language",
}

export enum SearchParamsDefaultValues {
  QUERY = "react",
  SORT = "rank",
  PAGE = "1",
  LANGUAGE = "JavaScript",
  TOTAL = "0",
}

export const ResultsSortOptions: SortOption[] = [
  { label: "Relevance", value: "" },
  { label: "Rank", value: "rank" },
  { label: "Stars", value: "stars" },
  { label: "Dependents", value: "dependent_repos_count" },
];

export const ITEMS_PER_PAGE =
  parseInt(import.meta.env.VITE_ITEMS_PER_PAGE, 10) || 5;

export const SearchNavObject = {
  path,
  routePath,
  linkLabel,
  linkKey,
  linkIcon,
};

export default SearchNavObject;
