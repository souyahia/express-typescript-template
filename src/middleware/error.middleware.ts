/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

/**
 * Express error handling middleware. To be used after all other middlewares.
 * In this case, it is needed to specify the next parameter even if it is not used.
 */
export default function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  logger.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
}
