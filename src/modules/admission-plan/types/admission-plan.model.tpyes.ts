
// export interface UserEnum
export interface AdmissionPlanAttributes {
	// q = quota
	// d = direct
	// c = cooperation
	id?: string;
	quotaStatus?: boolean;
	quotaSpecificSubject?: string;
	quotaDetail?: string;
	directStatus?: boolean;
	directSpecificSubject?: string;
	directDetail?: string;
	cooperationStatus?: string;
	cooperationSpecificSubject?: string;
	cooperationDetail?: string;
	year?: number;
	courseId?: string;
}
