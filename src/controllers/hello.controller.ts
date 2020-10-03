import { Request, Response } from 'express';

export function getHello(req: Request, res: Response): void {
  res.status(200).json({
    message: 'Hello world!',
    date: new Date().toISOString(),
  });
}

/*
 * This custom hello route is used to give example of uses for the async wraper, body parser, etc...
 */
export async function getCustomHello(req: Request, res: Response): Promise<void> {
  // We do this to "justify" the use of async, but never do this normally, obviously :)
  await (new Promise(resolve => setTimeout(resolve, 2000)));
  const { name } = req.params;
  const message =
    req.body.language === 'US' ? `Hello ${name}, how are you ?` : `Salut ${name}, comment vas-tu ?`;
  const returnValue = { message };
  if (req.body.sendDate) {
    Object.assign(returnValue, { date: new Date().toISOString() });
  }
  res.status(200).json(returnValue);
}
