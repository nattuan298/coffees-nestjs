/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  enviroment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
