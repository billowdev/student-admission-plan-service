import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  webtoken: process.env.JWT_SECRET,
  client: process.env.CLIENT_URL,
};

export default config;
