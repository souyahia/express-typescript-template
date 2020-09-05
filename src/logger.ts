/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createLogger, LogLevelString, Stream } from 'bunyan';
import bunyanDebugStream from 'bunyan-debug-stream';
import nconf from './config/nconf';

const level = nconf.get('Logger:Level') as LogLevelString;
let stream: Stream = null;

switch (nconf.get('Logger:Stream')) {
  case 'stdout':
    stream = {
      level,
      stream: process.stdout,
    };
    break;
  case 'bunyan-debug-stream':
    stream = {
      level,
      stream: bunyanDebugStream({
        basepath: __dirname,
        forceColor: true,
      }),
    };
    break;
  default:
    throw new Error(`Unknown Logger Stream : ${nconf.get('Logger:Stream') as string}.`);
}

/**
 * Application logger. Can be configured through NConf.
 */
const logger = createLogger({
  name: 'express-typescript-template-logger',
  level,
  streams: [stream],
  serializers: bunyanDebugStream.serializers,
});

export default logger;
