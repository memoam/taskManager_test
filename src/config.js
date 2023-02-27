import { config } from 'dotenv';
config();

export const dataApp = {
  port: process.env.PORT,
};
export const dataMysql = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  port: process.env.MYSQL_PORT || 3306,
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'example',
};
export const dataToken = {
  secret: process.env.SECRET,
};
