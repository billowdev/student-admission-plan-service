
import { Query } from "express-serve-static-core";
// export interface UserEnum

export interface AdmissionPlanAttributes {
	id?: string;
	quotaStatus?: boolean,
	quotaSpecificSubject?: string | null,
	quotaDetail?: string | null,

	directStatus?: boolean,
	directSpecificSubject?: string | null,
	directDetail?: string,

	cooperationStatus?: boolean,
	cooperationSpecificSubject?: string | null,
	cooperationDetail?: string | null,
	year?: number,
	courseId?: string,

}


// export interface AdmissionPlanQueryInterface extends Query, AdmissionPlanAttributes {
// 	keyword?: string
// }

export interface AdmissionPlanParamInterface {
	id: string
}

