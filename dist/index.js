"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const app = (0, app_1.default)();
const models_1 = __importDefault(require("./src/database/models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        const syncOptions = {
            logging: process.env.NODE_ENV !== 'production',
            force: process.env.NODE_ENV !== 'production' || process.env.DB_SYNC_FORCE === 'true', // Disable force sync in production unless DB_SYNC_FORCE is set to true
        };
        await models_1.default.sequelize.sync(syncOptions);
        console.log('Database synced successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Error syncing database:', error);
    }
};
startServer();
