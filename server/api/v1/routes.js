import express from 'express';
import homeRouter from './controllers/home/router';

const router = new express.Router();

router.use('/home', homeRouter);

export default router;