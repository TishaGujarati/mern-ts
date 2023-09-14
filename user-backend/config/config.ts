export const CONFIG = {
   PORT: {
     PORT: process.env.PORT || 8000,
   },
 
   DATABASE: {
   DB_DIALECT: process.env.DB_DIALECT || "mysql",
     DB_NAME: process.env.DB_NAME || "mern_user",
     DB_ROOT: process.env.DB_ROOT || "root",
     DB_HOST: process.env.DB_HOST || "localhost",
     DB_PASSWORD: process.env.DB_PASSWORD || "",
   },
 };