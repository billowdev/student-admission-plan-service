import App from "./src/app"
const app = App()
import db from "./src/database/models"

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const syncOptions = {
      logging: process.env.NODE_ENV !== 'production', // Mute sync log output in production
      force: process.env.NODE_ENV !== 'production' || process.env.DB_SYNC_FORCE === 'true', // Disable force sync in production unless DB_SYNC_FORCE is set to true
    };

    await db.sequelize.sync(syncOptions);
    console.log('Database synced successfully');


    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

startServer();

