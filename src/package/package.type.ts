export interface IPackage {
  id: number;
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
