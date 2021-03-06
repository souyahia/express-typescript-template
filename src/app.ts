import express from 'express';
import { json, urlencoded } from 'body-parser';
import { pingRouter, helloRouter, endpointErrorRouter } from './routers';
import logger from './logger';
import { logMiddleware, errorHandlerMiddleware } from './middleware';

logger.debug('Creating Express app...');
const app = express();

app.use(logMiddleware);
app.use(json());
app.use(urlencoded({ extended: true }));

// Add your middlewares here.

// Add your routers here.
app.use('/ping', pingRouter);
app.use('/hello', helloRouter);
app.use('*', endpointErrorRouter);

app.use(errorHandlerMiddleware);

logger.debug('Express app successfully created.');

export default app;
