import { Express } from 'express';
import registerPingRoutes from './ping.routes';

/*
 * Register your routes here.
 */
export default function registerRoutes(app: Express): void {
  registerPingRoutes(app);
}
