import { argv } from 'nconf';
import path from 'path';

const nconf = argv()
  .env('__')
  .file({
    file: path.join(__dirname, 'global.json'),
  });

export default nconf;
