import { Query } from "express-serve-static-core";

export interface ExtraAdminssionPlanAttributes {
	id?: string;
	qty?: number;
	year?: number;
	courseId?: string;

	createdAt?: Date;
	updatedAt?: Date;
}


export interface ExtraAdminssionPlanQueryInterface extends Query {
	qty?: string;
	year?: string;
	courseId?: string;
	keyword?: string
}

export interface ExtraAdminssionPlanParamInterface {
	id: string
}
