import { Request, Response } from 'express';

export function getPing(req: Request, res: Response): void {
  res.status(200).json({
    message: 'Greetings from express-typescript-template web server.',
    date: new Date().toISOString(),
    url: req.url,
  });
}
