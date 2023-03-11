
import { Query } from "express-serve-static-core";
import { Model } from "sequelize";
// export interface UserEnum

export interface AdmissionPlanAttributes {
	id?: string;
	quotaStatus?: boolean,
	quotaSpecificSubject?: string | null,
	quotaDetail?: string | null,
	quotaGoodStudyQty?: number,
	quotaGoodPersonQty?: number,
	// quota of good activity Music quantity
	// IM = international music
	quotaGoodActivityIMQty?: number,
	// quota of good activity Language institute quantity
	// LI = Language institute
	quotaGoodActivityLIQty?: number,
	// quota of good activity Student Development Division quantity
	// SDD = Student Development Division
	quotaGoodActivitySDDQty?: number,
	quotaGoodSportQty?: number,

	directStatus?: boolean,
	directSpecificSubject?: string,
	directDetail?: string,
	directQty?: number,

	cooperationStatus?: boolean,
	cooperationSpecificSubject?: string,
	cooperationDetail?: string,
	cooperationQty?: number;
	year?: string,
	studyGroup?: number,
	courseId?: string,

}


export interface AdmissionPlanQueryInterface extends Query {
	quota_detail?: string;
	quota_specific_subject?: string;
	quota_status?: string;
	direct_detail?: string;
	direct_specific_subject?: string;
	direct_status?: string;
	direct_qty?: string;
	cooperation_detail?: string;
	cooperation_specific_subject?: string;
	cooperation_status?: string;
	cooperation_qty?: string;
	year?: string;
	study_group?: string;
	keyword?: string;
}

export interface AdmissionPlanParamInterface {
	id: string
}

export interface AdmissionPlanInstance extends Model<AdmissionPlanAttributes>, AdmissionPlanAttributes {
	dataValues: AdmissionPlanAttributes;
	Course: any;
}
