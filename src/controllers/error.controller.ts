/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

/**
 * Catch requests on wrong end points.
 * @route ALL *
 */
export function badEndPoint(req: Request, res: Response): void {
  res.status(400).send({
    message: `Cannot ${req.method} ${req.url}`,
  });
}
