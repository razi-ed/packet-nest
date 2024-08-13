import { librariesServiceOpenClient } from "@shared/libs/http-client";

export function fetchPackageList(searchParams: URLSearchParams) {
  return librariesServiceOpenClient.get("/search", { params: searchParams });
}

export default fetchPackageList;
