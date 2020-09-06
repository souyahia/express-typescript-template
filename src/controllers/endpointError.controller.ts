import { Request, Response } from 'express';

export function endPointError(req: Request, res: Response): void {
  res.status(400).json({
    message: `Cannot ${req.method} ${req.url}`,
  });
}
