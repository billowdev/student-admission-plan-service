import { Query } from "express-serve-static-core";

export enum QuotaType {
	GOOD_STUDY = 'good_study',
	GOOD_ACTIVITY = 'good_activity',
	GOOD_SPORT = 'good_sport',
	GOOD_PERSON = 'good_person',
}


export interface ResponsibleQuotaPersonAttributes {
	id?: string;
	year?: string;
	name?: string;
	surname?: string;
	agency?: string;
	phone?: string;
	quota?: QuotaType;
	createdAt?: Date;
	updatedAt?: Date;
}


export interface ResponsibleQuotaPersonQueryInterface extends Query {
	year?: string;
	name?: string;
	surname?: string;
	agency?: string;
	phone?: string;
	quota?: string;
}

export interface ResponsibleQuotaPersonParamInterface {
	id: string
}
