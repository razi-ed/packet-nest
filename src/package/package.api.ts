import { mainServiceAuthedV1Client } from "@/modules/shared/utils/http.clients";

export function fetchPackageList() {
  return mainServiceAuthedV1Client.get("/");
}

export default fetchPackageList;
