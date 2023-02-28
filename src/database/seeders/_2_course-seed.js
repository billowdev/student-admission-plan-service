module.exports = {
	up: async (queryInterface) => {
	  const coursesData = [
		{ 
		  id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
		  major: "CS",
		  degree: "BsC",
		  qualification: "test",
		  faculty: "science",
		  created_at: new Date(),
		  updated_at: new Date()
		},
		{ 
		  id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
		  major: "IT",
		  degree: "BsC",
		  qualification: "test",
		  faculty: "science",
		  created_at: new Date(),
		  updated_at: new Date()
		},
	  ];
  
	  await queryInterface.bulkInsert('courses', coursesData);
	},
  
	down: async (queryInterface) => {
	  await queryInterface.bulkDelete('courses', {});
	},
  };
