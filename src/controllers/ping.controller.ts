import { Request, Response } from 'express';

/**
 * @api { get } /ping Ping the server.
 * @apiName GetPing
 * @apiGroup Ping
 *
 * @apiSuccess (200) { String } message Greeting message from the server.
 * @apiSuccess (200) { String } date Current date time.
 * @apiSuccess (200) { String } url Url of the request.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Greetings from express-typescript-template web server.",
 *       "date": "2020-09-05T18:37:01.849Z",
 *       "url": "/ping",
 *     }
 */
export function getPing(req: Request, res: Response): void {
  res.status(200).send({
    message: 'Greetings from express-typescript-template web server.',
    date: new Date().toISOString(),
    url: req.url,
  });
}
