import express from 'express';
import { endpointErrorController } from '../controllers';

const endpointErrorRouter = express.Router();

endpointErrorRouter.all('*', endpointErrorController.endPointError);

export default endpointErrorRouter;
