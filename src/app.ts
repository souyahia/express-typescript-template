import express from 'express';
import bodyParser from 'body-parser';
import { pingRouter, helloRouter, endpointErrorRouter } from './routers';
import logger from './logger';
import { logMiddleware, errorhandlerMiddleware } from './middleware';

logger.debug('Creating Express app...');
const app = express();

app.use(logMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add your middlewares here.

// Add your routers here.
app.use('/ping', pingRouter);
app.use('/hello', helloRouter);
app.use('*', endpointErrorRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandlerMiddleware);
}

logger.debug('Express app successfully created.');

export default app;
