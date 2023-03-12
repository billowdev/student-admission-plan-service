const bcrypt = require('bcrypt');

module.exports = {

	up: async (queryInterface) => {
		const passwordHashing = (await bcrypt.hash("1234", 10)).toString()
		const usersData = [
			{
				id: "1d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				username: "admin",
				password: passwordHashing,
				name: "admin",
				surname: "admin",
				phone: "0987654321",
				email: "admin@gmail.com",
				role: "admin",
				faculty: "science",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "1d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				username: "user",
				password: passwordHashing,
				name: "user",
				surname: "user",
				phone: "0987654321",
				email: "user@gmail.com",
				role: "user",
				faculty: "science",
				created_at: new Date(),
				updated_at: new Date()
			},
		];

		await queryInterface.bulkInsert('users', usersData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('users', {});
	},
};
