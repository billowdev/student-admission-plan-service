import App from "./src/app"
const app = App()
import db from "./src/database/models"

db.sequelize.sync({ force: true }).then(() => {
	app.listen(5000, () => {
		console.log("SERVER ON 5000")
		return "server"
	})
}).then(() => {
	console.log('Database synced successfully');
})
	.catch((error: any) => {
		console.error('Error syncing database:', error);
	});