import { Query } from "express-serve-static-core";

export interface ExtraAdmissionPlanAttributes {
	id?: string;
	qty?: number;
	year?: string;
	courseId?: string;

	createdAt?: Date;
	updatedAt?: Date;
}


export interface ExtraAdmissionPlanQueryInterface extends Query {
	qty?: string;
	year?: string;
	courseId?: string;
	keyword?: string
}

export interface ExtraAdmissionPlanParamInterface {
	id: string
}
