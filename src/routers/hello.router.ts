import { Router } from 'express';
import { body } from 'express-validator';
import { helloController } from '../controllers';
import { paramsValidatorMiddleware } from '../middleware';

const helloRouter = Router();

/**
 * @api { get } /hello Get a hello message from the server.
 * @apiName GetHello
 * @apiGroup Hello
 *
 * @apiSuccess (200 OK) { String } message Hello world from the server.
 * @apiSuccess (200 OK) { String } date    Current date time.
 *
 * @apiSuccessExample Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Hello world!",
 *      "date": "2020-09-05T18:37:01.849Z"
 *    }
 */
helloRouter.get('/', helloController.getHello);

/**
 * @api { post } /hello/:name Get a custom hello message from the server.
 * @apiName GetCustomHello
 * @apiGroup Hello
 *
 * @apiParam (Path Parameters) { String } name The custom name displayed in the message.
 *
 * @apiParam (Body Parameters) { String }  language   The language of the message. Either `"US"` or `"FR"`.
 * @apiParam (Body Parameters) { Boolean } [sendDate] Add the current date to the hello message (default : `false`).
 *
 * @apiSuccess (200 OK) { String } message Hello message from the server.
 * @apiSuccess (200 OK) { String } [date]  Current date time.
 *
 * @apiSuccessExample Success Response
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Hello John, how are you ?"
 *    }
 *
 * @apiSuccessExample Success Response (with date)
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Hello John, how are you ?",
 *      "date": "2020-09-05T18:37:01.849Z"
 *    }
 *
 * @apiError (400 Bad Request) { String }   message         The error message.
 * @apiError (400 Bad Request) { Object[] } errors          Errors in the request parameters.
 * @apiError (400 Bad Request) { String }   errors.msg      Message of the parameter error.
 * @apiError (400 Bad Request) { String }   errors.param    Name of the parameter that caused the error.
 * @apiError (400 Bad Request) { String }   errors.location Location of the parameter that caused the error.
 * @apiError (400 Bad Request) { any }      [errors.value]  Value of the parameter that caused the error.
 *
 * @apiErrorExample Invalid request parameters.
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "message": "Invalid request parameters.",
 *      "errors": [
 *        {
 *          "value": 42,
 *          "msg": "Invalid value",
 *          "param": "sendDate",
 *          "location": "body"
 *        }
 *      ]
 *    }
 */
helloRouter.post(
  '/:name',
  [body('language').isIn(['US', 'FR']), body('sendDate').optional().isBoolean()],
  paramsValidatorMiddleware,
  helloController.getCustomHello
);

export default helloRouter;
