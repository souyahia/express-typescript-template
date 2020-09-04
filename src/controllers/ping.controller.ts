/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

export function ping(req: Request, res: Response): void {
  res.status(200).send({
    message: 'Greetings from the Pecunia Web Server.',
    date: new Date().toISOString(),
    url: req.url,
  });
}
