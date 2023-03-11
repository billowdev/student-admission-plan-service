
import { Query } from "express-serve-static-core";
import { Model } from "sequelize";
// export interface UserEnum
export interface CourseAttributes {
	id?: string;
	major?: string;
	degree: string;
	detail?: string;
	faculty?: string;
  }
  
  export interface CourseType {
	id: string;
	major: string;
	degree: string;
	detail: string;
	faculty: string;
  }

  export interface CourseInstance extends Model<CourseAttributes>, CourseAttributes {
	dataValues: CourseAttributes;
}


export interface CourseQueryInterface extends Query, CourseAttributes {
	keyword?: string
}

export interface CourseParamInterface {
	id: string
}

