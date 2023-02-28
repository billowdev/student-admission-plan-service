const hashPassword = async (password) => {
	const hash = await argon2.hash(password);
	return hash;
};


module.exports = {
	up: async (queryInterface) => {
		const usersData = [
			{
				id: "1d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				username: "admin",
				password: hashPassword("1234"),
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
				id: "1d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				username: "user",
				password: hashPassword("1234"),
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
