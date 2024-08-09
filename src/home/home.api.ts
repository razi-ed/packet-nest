import { mainServiceAuthedV1Client } from "@/modules/shared/utils/http.clients";

export function fetchHomeList() {
  return mainServiceAuthedV1Client.get("/");
}

export default fetchHomeList;
