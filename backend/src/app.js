import express from 'express';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
export default app;
