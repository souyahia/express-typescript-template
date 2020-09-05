import { argv } from 'nconf';
import path from 'path';

/**
 * Web server server environment configuration. Define your global configuration properties in the `global.json` file.
 */
const nconf = argv()
  .env('__')
  .file({
    file: path.join(__dirname, 'global.json'),
  });

export default nconf;
