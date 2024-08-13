import { AxiosResponseHeaders } from "axios";
import { RequestStatus } from "../constants";
import { ExceptionStatusType } from "antd/es/result";

export type SortValues = "stars" | "dependent_repos_count" | "rank" | "";

export interface DataFetchStore<T = null> {
  data: T | null;
  headers: Partial<AxiosResponseHeaders> | null;
  status: RequestStatus;
  error: string | null;
  code: number | ExceptionStatusType | null;
}
export interface SearchErrorResponse {
  error: string;
}
