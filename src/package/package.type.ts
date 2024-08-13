import { SortValues } from "@shared/types";

export interface SortOption {
  value: SortValues;
  label: string;
}

export interface IPackage {
  id: number;
}

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
  // sort?: "stars" | "dependent_repos_count" | "rank";
  sort?: string;
  language?: string;
}

// interface IRoleToSkillMap {
//   [key: string]: Pick<IRole, 'skills'>;
// }

// export type TNewRole = Omit<IRole, 'id' | 'status' | 'isco_code' | 'created_at' | 'is_verified'>;
// export type TRolePrerequesites = Pick<IRole, 'industry' | 'department' | 'position'>;
// export interface TSkillsToRoleFormPrerequesites extends TRolePrerequesites {
//   roleToSkillsMap?: IRoleToSkillMap;
// }

export interface IDataInteractionStatus {
  mutationStatus: string;
  mutationResponse?: string;
}

export interface IPackageState {
  list: IPackage[];
  queryStatus: string;
  dataInteractionStatuses: IDataInteractionStatus;
}

// export type TRoleUpdateResponse = IGenericHttpResponse<Pick<IRole, 'id' | 'role_id'>>;

// export type TRoleFormData = TNewRole & { ml_suggested: boolean };
