import express from 'express';
import { pingController } from '../controllers';

const pingRouter = express.Router();

/**
 * @api { get } /ping Ping the server.
 * @apiName GetPing
 * @apiGroup Ping
 *
 * @apiSuccess (200 OK) { String } message Greeting message from the server.
 * @apiSuccess (200 OK) { String } date    Current date time.
 * @apiSuccess (200 OK) { String } url     Url of the request.
 *
 * @apiSuccessExample Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Greetings from express-typescript-template web server.",
 *      "date": "2020-09-05T18:37:01.849Z",
 *      "url": "/ping",
 *    }
 */
pingRouter.get('/', pingController.getPing);

export default pingRouter;
