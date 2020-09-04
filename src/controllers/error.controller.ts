/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

export function badEndPoint(req: Request, res: Response): void {
  res.status(400).send({
    message: `Cannot ${req.method} ${req.url}`,
  });
}
