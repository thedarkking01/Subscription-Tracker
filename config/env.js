// import { config } from "dotenv";
// config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
// export const {PORT,NODE_ENV} = process.env;

import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

console.log("NODE_ENV:", process.env.NODE_ENV);  // Check the current environment
console.log("PORT:", process.env.PORT);  // Check if PORT is loaded correctly

export const { PORT, NODE_ENV } = process.env;
