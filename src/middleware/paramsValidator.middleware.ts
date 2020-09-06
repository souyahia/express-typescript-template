import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

/**
 * Validator middleware checking the validity of the request parameters.
 */
export default function paramsValidatorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: 'Invalid request parameters.',
      errors: errors.array(),
    });
  } else {
    next();
  }
}
