import { AxiosResponseHeaders } from "axios";
import { RequestStatus } from "../constants";

export type SortValues = "stars" | "dependent_repos_count" | "rank" | "";

export interface DataFetchStore<T> {
  data: T | null;
  headers: Partial<AxiosResponseHeaders> | null;
  status: RequestStatus;
  error: string | null;
}
