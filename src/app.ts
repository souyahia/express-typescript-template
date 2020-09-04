import express from 'express';
import registerRoutes from './routes';
import logger from './logger';
import { logMiddleware, errorhandlerMiddleware } from './middleware';
import { errorController } from './controllers';

logger.debug('Creating Express app...');
const app = express();

app.use(logMiddleware);

registerRoutes(app);

app.all('*', errorController.badEndPoint);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  app.use(errorhandlerMiddleware);
}

logger.debug('Express app successfully created.');

export default app;
