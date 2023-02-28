module.exports = {
	up: async (queryInterface) => {
		const admissionPlanData = [
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				quota_status: true,
				quota_specific_subject: "quota_specific_subject",
				quota_direct: "quota_direct",
				direct_status: true,
				direct_specific_subject: "direct_specific_subject",
				direct_direct: "direct_direct",
				cooperation_status: true,
				cooperation_specific_subject: "cooperation_specific_subject",
				cooperation_direct: "cooperation_direct",
				year: 2565,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				quota_status: true,
				quota_specific_subject: "quota_specific_subject",
				quota_direct: "quota_direct",
				direct_status: true,
				direct_specific_subject: "direct_specific_subject",
				direct_direct: "direct_direct",
				cooperation_status: false,
				cooperation_specific_subject: null,
				cooperation_direct: null,
				year: 2565,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				created_at: new Date(),
				updated_at: new Date()
			},
		];

		await queryInterface.bulkInsert('admission_plan', admissionPlanData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('admission_plan', {});
	},
};
