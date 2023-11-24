import dotenv from "dotenv";

dotenv.config();
const requiredEnvs = ["CLIENT_ID", "CLIENT_SECRET", "REDIRECT_URI"];

requiredEnvs.forEach((env) => {
  if (!process.env[env]) throw new Error(`Missing env variable ${env}`);
});

export default enviroments = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
};
