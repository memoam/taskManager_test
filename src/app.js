import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { dataApp } from './config.js';
import { pool } from './db.js';

// import routes
import tokenRoutes from './routes/token.route.js';
import taskRoutes from './routes/task.route.js';
import userRoutes from './routes/user.route.js';
import tagsRoutes from './routes/tags.route.js';
import statusRoutes from './routes/status.route.js';



const app = express();

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT 1 + 1 As result');
  res.json(result);
});
// Settings
app.set('port', dataApp.port);
app.set('json spaces', 2);

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/token', tokenRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tags', tagsRoutes);
app.use('/api/status', statusRoutes);



export default app;
