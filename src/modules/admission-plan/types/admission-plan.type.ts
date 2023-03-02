
import { Query } from "express-serve-static-core";
// export interface UserEnum

export interface AdmissionPlanAttributes {
	id?: string;
	quotaStatus?: boolean,
	quotaSpecificSubject?: string | null,
	quotaDetail?: string | null,

	directStatus?: boolean,
	directSpecificSubject?: string,
	directDetail?: string,

	cooperationStatus?: boolean,
	cooperationSpecificSubject?: string,
	cooperationDetail?: string,
	year?: number,
	courseId?: string,

}


export interface AdmissionPlanQueryInterface extends Query {
	quota_detail?: string;
	quota_specific_subject?: string;
	quota_status?: string;
	direct_detail?: string;
	direct_specific_subject?: string;
	direct_status?: string;
	cooperation_detail?: string;
	cooperation_specific_subject?: string;
	cooperation_status?: string;
	year?: string;
	keyword?: string;
}

export interface AdmissionPlanParamInterface {
	id: string
}

