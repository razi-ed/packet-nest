import { SortValues } from "@shared/types";
import { ExceptionStatusType } from "antd/es/result";

export interface SortOption {
  value: SortValues;
  label: string;
}

export type SearchErrorHandle = Record<
  ExceptionStatusType | number,
  {
    errStatus: ExceptionStatusType;
    errMessage: string;
  }
>;

export interface Package {
  description: string;
  homepage: string;
  language: string;
  latest_release_number: string;
  latest_stable_release_number: string;
  latest_stable_release_published_at: string;
  licenses: string;
  name: string;
  normalized_licenses?: string[] | null;
  package_manager_url: string;
  platform: string;
  rank: number;
  dependent_repos_count: number;
  repository_url: string;
  stars: number;
  forks: number;
  versions?: VersionsEntity[] | null;
}
export interface VersionsEntity {
  number: string;
  published_at: string;
  spdx_expression: string;
  original_license: string;
  researched_at?: null;
  repository_sources?: string[] | null;
}

export interface IPackageSearchParams {
  q?: string;
  page?: number;
  per_page?: number;
  sort?: string;
  language?: string;
}
