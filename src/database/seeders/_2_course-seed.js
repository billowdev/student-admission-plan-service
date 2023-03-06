module.exports = {
	up: async (queryInterface) => {
		const coursesData = [
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				major: "คณิตศาสตร์",
				degree: "วท.บ. 4 ปี",
				detail: "คณิตศาสตร์ เรียน ...",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},

			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d2",
				major: "วิทยาการข้อมูล",
				degree: "วท.บ. 4 ปี",
				detail: "วิทยาการข้อมูล",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d3",
				major: "วิทยาการคอมพิวเตอร์",
				degree: "วท.บ. 4 ปี",
				detail: "วิทยาการคอมพิวเตอร์",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d4",
				major: "เทคโนโลยีคอมพิวเตอร์และดิจิทัล",
				degree: "วท.บ. 4 ปี",
				detail: "เทคโนโลยีคอมพิวเตอร์และดิจิทัล",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d5",
				major: "ฟิสิกส์",
				degree: "วท.บ. 4 ปี",
				detail: "ฟิสิกส์",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d6",
				major: "ชีววิทยา",
				degree: "วท.บ. 4 ปี",
				detail: "ชีววิทยา",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d7",
				major: "วิทยาศาสตร์สิ่งแวดล้อม",
				degree: "วท.บ. 4 ปี",
				detail: "วิทยาศาสตร์สิ่งแวดล้อม",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d8",
				major: "เคมี",
				degree: "วท.บ. 4 ปี",
				detail: "เคมี",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d9",
				major: "สาธารณสุขศาสตร์",
				degree: "ส.บ. 4 ปี",
				detail: "สาธารณสุขศาสตร์",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d1",
				major: "นิติศาสตร์",
				degree: "น.บ. 4 ปี",
				detail: "นิติศาสตร์ เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d2",
				major: "ภาษาอังกฤษ",
				degree: "ศศ.บ. 4 ปี",
				detail: "ภาษาอังกฤษ เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d3",
				major: "ภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ",
				degree: "ศศ.บ. 4 ปี",
				detail: "ภาษาอังกฤษเพื่อการสื่อสารทางธุรกิจ เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d4",
				major: "ภาษาไทยเพื่อการสื่อสาร",
				degree: "ศศ.บ. 4 ปี",
				detail: "ภาษาไทยเพื่อการสื่อสาร เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d5",
				major: "การท่องเที่ยว",
				degree: "ศศ.บ. 4 ปี",
				detail: "การท่องเที่ยว เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d6",
				major: "การพัฒนาชุมชน",
				degree: "ศศ.บ. 4 ปี",
				detail: "การพัฒนาชุมชน  เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d7",
				major: "ภาษาจีน",
				degree: "ศศ.บ. 4 ปี",
				detail: "ภาษาจีน  เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d8",
				major: "รัฐศาสตร์",
				degree: "ร.บ. 4 ปี",
				detail: "รัฐศาสตร์  เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c1d9",
				major: "ดนตรี",
				degree: "ศป.บ. 4 ปี",
				detail: "ดนตรี เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c2d0",
				major: "ทัศนศิลป์",
				degree: "ศป.บ. 4 ปี",
				detail: "ทัศนศิลป์ เรียน ...",
				faculty: "คณะมนุษยศาสตร์และสังคมศาสตร์",
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
