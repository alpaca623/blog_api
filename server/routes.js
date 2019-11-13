import v1Router from './api/v1/routes';

export default function routes(app) {
  app.use('/api/v1', v1Router);
}
