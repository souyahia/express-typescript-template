import { Router } from 'express';
import { endpointErrorController } from '../controllers';

const endpointErrorRouter = Router();

endpointErrorRouter.all('*', endpointErrorController.endPointError);

export default endpointErrorRouter;
