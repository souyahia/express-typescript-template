import { Request, Response } from 'express';

export function endPointError(req: Request, res: Response): void {
  res.status(400).send({
    message: `Cannot ${req.method} ${req.url}`,
  });
}
