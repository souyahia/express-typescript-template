import { Request, Response, NextFunction } from 'express';
import logger from '../logger';
import config from '../config';

const showHeaders = (config.get('Logger:ShowHeaders') as string).toLowerCase() === 'true';

/**
 * Logging middleware automatically logging requests and responses.
 */
export default function logMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.once('finish', () => {
    let message = `${req.method} ON ${req.url} (${res.statusCode}${
      res.statusMessage ? ` - ${res.statusMessage}` : ''
    })\n`;
    if (showHeaders) {
      message += `Incoming Headers : ${JSON.stringify(req.headers, null, 2)}\n`;
      message += `Outgoing Headers : ${JSON.stringify(res.getHeaders(), null, 2)}\n`;
    }
    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.error(message);
    }
  });
  next();
}
