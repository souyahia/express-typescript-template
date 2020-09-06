import { Request, Response } from 'express';

export function getHello(req: Request, res: Response): void {
  res.status(200).json({
    message: 'Hello world!',
    date: new Date().toISOString(),
  });
}

export function getCustomHello(req: Request, res: Response): void {
  const { name } = req.params;
  const message =
    req.body.language === 'US' ? `Hello ${name}, how are you ?` : `Salut ${name}, comment vas-tu ?`;
  const returnValue = { message };
  if (req.body.sendDate) {
    Object.assign(returnValue, { date: new Date().toISOString() });
  }
  res.status(200).json(returnValue);
}
