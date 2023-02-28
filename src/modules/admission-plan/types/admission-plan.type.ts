
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
	keyword?: string

	id?: string;
	quotaStatus?: any, // boolean
	quotaSpecificSubject?: string,
	quotaDetail?: string,

	directStatus?: any,
	directSpecificSubject?: string,
	directDetail?: string,

	cooperationStatus?: any,
	cooperationSpecificSubject?: string,
	cooperationDetail?: string,
	year?: string,
	courseId?: string,
}

export interface AdmissionPlanParamInterface {
	id: string
}

