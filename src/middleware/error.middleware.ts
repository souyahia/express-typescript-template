import { Request } from 'express';
import errorhandler from 'errorhandler';
import logger from '../logger';

function logError(err: Error, str: string, req: Request): void {
  logger.error(`Error in ${req.method} ON ${req.url}`, err);
}

/**
 * Express error handling middleware. To be used after all other middlewares. Only use it in development mode !
 */
const errorhandlerMiddleware = errorhandler({ log: logError });

export default errorhandlerMiddleware;
