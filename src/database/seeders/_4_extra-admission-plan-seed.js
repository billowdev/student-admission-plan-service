module.exports = {
	up: async (queryInterface) => {
		const extraAdmissionPlanData = [
			{
				id: "4d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				qty: 50,
				year: "2565",
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "4d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				qty: 50,
				year: "2565",
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "4d28da7c-bb8f-4e41-bfe1-c6957649c7d3",
				qty: 50,
				year: "2565",
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d1",
				created_at: new Date(),
				updated_at: new Date()
			},
		];

		await queryInterface.bulkInsert('extra_admission_plans', extraAdmissionPlanData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('extra_admission_plans', {});
	},
};
