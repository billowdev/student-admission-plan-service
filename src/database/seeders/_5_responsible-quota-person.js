module.exports = {
	up: async (queryInterface) => {
		const responsibleQuotaPersonData = [
			{
				id: "5d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				year: "2565",
				name: "MRJOHN",
				surname: "SON",
				agency: "Science Faculty",
				phone: "0987653212",
				quota: "GOOD_STUDY",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "5d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				year: "2565",
				name: "Miss alice",
				surname: "surname",
				agency: "Science Faculty",
				phone: "0987653211",
				quota: "GOOD_ACTIVITY",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "5d28da7c-bb8f-4e41-bfe1-c6957649c7d3",
				year: "2565",
				name: "mr akira",
				surname: "surname",
				agency: "Science Faculty",
				phone: "0987653211",
				quota: "GOOD_SPORT",
				created_at: new Date(),
				updated_at: new Date()
			}, {
				id: "5d28da7c-bb8f-4e41-bfe1-c6957649c7d4",
				year: "2565",
				name: "akio",
				surname: "surname",
				agency: "Science Faculty",
				phone: "0987653214",
				quota: "GOOD_PERSON",
				created_at: new Date(),
				updated_at: new Date()
			},
		];

		await queryInterface.bulkInsert('responsible_quota_persons', responsibleQuotaPersonData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('responsible_quota_persons', {});
	},
};
