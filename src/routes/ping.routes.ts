import { Express } from 'express';
import { pingController } from '../controllers';

export default function registerPingRoutes(app: Express): void {
  app.get('/ping', pingController.ping);
}
