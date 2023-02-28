
import { Query } from "express-serve-static-core";
// export interface UserEnum
export interface CourseAttributes {
	id?: string;
	major?: string;
	degree: string;
	qualification?: string;
	faculty?: string;
  }
  

export interface CourseQueryInterface extends Query, CourseAttributes {
	keyword?: string
}

export interface CourseParamInterface {
	id: string
}
