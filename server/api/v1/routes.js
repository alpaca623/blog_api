import express from 'express';
import homeRouter from './controllers/home/router';
import menuRouter from './controllers/menu/router';

const router = new express.Router();

router.use('/home', homeRouter);
router.use('/menu', menuRouter);

export default router;