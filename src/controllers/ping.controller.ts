/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

/**
 * Ping the web server and get a greeting message.
 * @route GET /ping
 */
export function ping(req: Request, res: Response): void {
  res.status(200).send({
    message: 'Greetings from express-typescript-template web server.',
    date: new Date().toISOString(),
    url: req.url,
  });
}
