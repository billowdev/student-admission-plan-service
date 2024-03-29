module.exports = {
	up: async (queryInterface) => {
		const admissionPlanData = [
			{
				// ==========================================
				// คณะวิทยาศาสตร์และเทคโนโลยี
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 30,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 19,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d3",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 19,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d3",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d4",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, ศิลป์-ภาษา,ศิลป์-คำนวณ, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต สายวิทย์-คณิต, ศิลป์-ภาษา,ศิลป์-คำนวณ, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 29,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d4",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d5",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 9,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d5",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d6",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 9,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d6",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d7",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 9,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d7",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d8",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 9,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d8",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d9",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับ ม.6 หรือเทียบเท่า, 2.GPAX  4 ภาคเรียนไม่น้อยกว่า  2.00, 3.Portfolio, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d9",
				created_at: new Date(),
				updated_at: new Date()
			},
			// ==========================================
			// คณะมนุษยศาสตร์และสังคมศาสตร์
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d1",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน",
				cooperation_qty: 80,
				year: "2565",
				study_group: 2,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d2",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX 4 ภาคเรียน",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 50,
				year: "2565",
				study_group: 2,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d3",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 60,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d3",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d4",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 50,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d4",
				created_at: new Date(),
				updated_at: new Date()
			},

			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d5",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 45,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d5",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d6",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX 4 ภาคเรียน ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 25,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d6",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d7",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 50,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d7",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c1d8",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 90,
				year: "2565",
				study_group: 2,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d8",
				created_at: new Date(),
				updated_at: new Date()
			},
			// =========================================================
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957619c1d9",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 25,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d9",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c2d0",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.GPAX 5 ภาคเรียน ",
				cooperation_qty: 40,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c2d0",
				created_at: new Date(),
				updated_at: new Date()
			},
			// ==========================================
			// คณะเทคโนโลยีอุตสาหกรรม
			// 2d28da7c-bb8f-4e41-bfe1-c6957641c1d0
			// สาขาวิชาเทคโนโลยีโยธา
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d0",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d0",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาสถาปัตยกรรม
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d1",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีเครื่องกล
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d2",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีการผลิต
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d3",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d3",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาไฟฟ้า
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d4",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d4",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาอิเล็กทรอนิกส์
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c1d5",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c1d5",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีโยธา
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d0",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d0",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีสถาปัตยกรรม
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d1",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีเครื่องกล
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d2",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาเทคโนโลยีการผลิต
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d3",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d3",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาไฟฟ้า
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d4",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d4",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สาขาวิชาอิเล็กทรอนิกส์
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957641c2d5",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.รับม.6 หรือเทียบเท่า,ศิลป์-คำนวณ, 2. GPAX 4 ภาคเรียน,  ไม่น้อยกว่า 2.00",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับม.6 หรือเทียบเท่า, สายวิทย์-คณิต, ศิลป์-ภาษา, ศิลป์-คำนวณ, 2. GPAX 5 ภาคเรียน, ไม่น้อยกว่า 2.00 ",
				cooperation_qty: 10,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957641c2d5",
				created_at: new Date(),
				updated_at: new Date()
			},


			// =======================================================
			// คณะครุศาสตร์
			// พลศึกษา
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957642c1d1",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX  4 ภาคเรียน, ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 32,
				quota_good_person_qty: 2,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 18,
				direct_status: 1,
				direct_specific_subject: "",
				direct_detail: "1.GPAX  5 ภาคเรียน,ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				direct_qty: 8,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957642c1d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			//คณิตศาสตร์
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957642c1d2",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX  4 ภาคเรียน, ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 40,
				quota_good_activity_im_qty: 1,
				quota_good_activity_li_qty: 1,
				quota_good_activity_sdd_qty: 1,
				quota_good_sport_qty: 1, 
				quota_good_person_qty: 1,
				direct_status: 1,
				direct_specific_subject: "",
				direct_detail: "1.GPAX  5 ภาคเรียน,ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				direct_qty: 15,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957642c1d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			// ฟิสิกส์
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957642c1d3",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX  4 ภาคเรียน, ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 15,
				quota_good_activity_im_qty: 1,
				quota_good_activity_li_qty: 1,
				quota_good_activity_sdd_qty: 1,
				quota_good_sport_qty: 1,
				 direct_status: 1,
				quota_good_person_qty: 0,
				direct_specific_subject: "",
				direct_detail: "1.GPAX  5 ภาคเรียน,ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				direct_qty: 10,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957642c1d3",
				created_at: new Date(),
				updated_at: new Date()
			},
			// วิทยาศาสตร์ทั่วไป
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957642c1d4",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX  4 ภาคเรียน, ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 46,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 1,
				 direct_status: 1,
				quota_good_person_qty: 1,
				direct_specific_subject: "",
				direct_detail: "1.GPAX  5 ภาคเรียน,ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				direct_qty: 12,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957642c1d4",
				created_at: new Date(),
				updated_at: new Date()
			},
			// สังคมศึกษา
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957642c1d5",
				quota_status: 1,
				quota_specific_subject: "",
				quota_detail: "1.GPAX  4 ภาคเรียน, ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0, direct_status: 1,
				quota_good_person_qty: 0,
				direct_specific_subject: "",
				direct_detail: "1.GPAX  5 ภาคเรียน,ไม่น้อยกว่า 2.75, 2.Portfolio, 3.สอบวัดแววความเป็นครู, 4.สอบสัมภาษณ์",
				direct_qty: 12,
				cooperation_status: 0,
				cooperation_specific_subject: "",
				cooperation_detail: "",
				cooperation_qty: 0,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957642c1d5",
				created_at: new Date(),
				updated_at: new Date()
			},

		];

		await queryInterface.bulkInsert('admission_plans', admissionPlanData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('admission_plans', {});
	},
};
