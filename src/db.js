import { createPool } from 'mysql2/promise';
import { dataMysql } from './config.js';

const { host, user, password, port, database } = dataMysql;

export const pool = createPool({
  host,
  user,
  password,
  port,
  database,
});
