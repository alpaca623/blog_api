import v1Router from './api/v1/routes';
import viewRouter from './api/v1/controllers/view/router';

export default function routes(app) {
  app.use('/api/v1', v1Router);
  app.use('/view', viewRouter);
}
