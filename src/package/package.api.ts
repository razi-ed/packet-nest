import { librariesServiceOpenClient } from "@shared/libs/http-client";
import { SearchParamsKeys } from "./search/search.constants";

export function fetchPackageList(searchParams: URLSearchParams) {
  const cleanedSearchParams = new URLSearchParams();
  Object.values(SearchParamsKeys).forEach((paramKey) => {
    const value = searchParams.get(paramKey);
    if (value) {
      cleanedSearchParams.set(paramKey, value);
    }
  });
  return librariesServiceOpenClient.get("/search", {
    params: cleanedSearchParams,
  });
}

export default fetchPackageList;
