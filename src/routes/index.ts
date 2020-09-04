import { Express } from 'express';
import registerPingRoutes from './ping.routes';

export default function registerRoutes(app: Express): void {
  registerPingRoutes(app);
}
