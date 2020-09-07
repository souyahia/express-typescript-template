import app from './app';
import config from './config';
import logger from './logger';

const port = config.get('Server:Port') as string;

logger.debug(`Starting server on port ${port}...`);
const server = app.listen(port, () => {
  logger.info('*******************************************');
  logger.info(`Server is running at http://localhost:${port}`);
  logger.info(`Try http://localhost:${port}/ping`);
  logger.info('*******************************************');
});

export default server;
