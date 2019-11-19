import * as express from 'express';
import controller from './controller';

export default express.Router()
  .get('/', controller.getDocument)
  .post('/insert', controller.insertDocument)
  .post('/update', controller.updateDocument)
  .post('/delete', controller.deleteDocument);