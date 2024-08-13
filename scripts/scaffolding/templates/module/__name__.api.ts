import { mainServiceAuthedV1Client } from "@/modules/shared/utils/http.clients";

export function fetch__Name__List() {
  return mainServiceAuthedV1Client.get("/");
}

export default fetch__Name__List;
