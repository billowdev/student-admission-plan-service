import { Query } from "express-serve-static-core";
import { CourseAttributes, CourseInstance } from 'modules/course/types/course.type';
// import Sequelize from "sequelize/types/sequelize";
import { CourseType } from './../../course/types/course.type';
import { Model, UUIDV4 } from "sequelize";
export interface ExtraAdmissionPlanAttributes {
	id?: string;
	qty?: number;
	year?: string;
	courseId?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ExtraAdmissionPlanType {
	id?: string;
	qty?: number;
	year?: string;
	courseId?: string;
	Course: CourseType
	createdAt?: Date;
	updatedAt?: Date;
}


export interface ExtraAdmissionPlanInstance extends Model<ExtraAdmissionPlanAttributes>, ExtraAdmissionPlanAttributes {
	dataValues: ExtraAdmissionPlanAttributes;
	Course: any; 
}



export type ExtraAdmissionPlanGroupByType = { [key: string]: ExtraAdmissionPlanAttributes[] }

export interface ExtraAdmissionPlanQueryInterface extends Query {
	qty?: string;
	year?: string;
	courseId?: string;
	keyword?: string
}

export interface ExtraAdmissionPlanParamInterface {
	id: string
}
