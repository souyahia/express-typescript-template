/* eslint-disable promise/no-callback-in-promise */
import { Request, Response, NextFunction } from 'express';

/*
 * Wrap your async route handlers with this wraper in order make the error hanlder catch errors even in async mode.
 * All the type checking is necessary to avoid eslint errors when using the handler.
 */
const asyncWraper: (
  fn: (arg0: Request, arg1: Response, arg2: NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction) => Promise<void> = (
  fn: (arg0: Request, arg1: Response, arg2: NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncWraper;
