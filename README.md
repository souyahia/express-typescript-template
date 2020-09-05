# Overview

This repository describes a custom NodeJs TypeScript project template, that can be used to start the development of an Express web server with the proper configuration and project structure very quickly.

# Project Structure
The project structure is as follows :
```
├── coverage/                 [gitignored] Test coverage reports
├── dist/                     [gitignored] JavaScript compiled files, type declarations and source maps
├── node_modules/             [gitignored] Node modules
├── test/                     TypeScript tests files (with the format *.test.ts)
├── src/                      TypeScript source files
│   ├── config/               NConf configuration
│   │   └── ...
│   ├── controllers/          Express Controllers
│   │   └── ...
│   ├── middleware/           Express Middleware
│   │   └── ...
│   ├── routes/               Express Route Registering
│   │   └── ...
│   ├── app.ts                Express App configuration
│   ├── logger.ts             Bunynan Logger Implementation
│   └── server.ts             Main TypeScript file
├── .eslintcache              [gitignored] ESLint cache
├── .eslintignore             Files ignored by ESLint
├── .dockerignore             Files ignored by Docker
├── .eslintrc.json            ESLint configuration file
├── .gitattributes            Git EOL normalization and diff configuration patterns
├── .gitignore                Files ignored by GIT
├── .npmignore                Files ignored by NPM (for publishing)
├── .npmrc                    NPM configuration file
├── .prettierignore           Files ignored by Prettier
├── .prettierrc.json          Prettier configuration file
├── jest.config.js            Jest configuration file
├── package.json              Project package.json
├── package-lock.json         Package lock (can be removed to update dep versions)
├── README.md                 README of the repo
├── LICENSE                   Project License
├── Dockerfile                Dockerfile to run the server in a container
├── docker-entrypoint.sh      Entry point of the Dockerfile
├── docker-compose.yaml       Compose file for production 
├── docker-compose.dev.yaml   Compose file for development
├── docker-compose.test.yaml  Compose file for tests
├── nodemon.json              Nodemon configuration file
├── tsconfig.json             TypeScript project configuration file
└── tsconfig.eslint.json      TypeScript configuraiton file for the ESLint parser
```

# How to use
## Development
To run the server in development mode, simply use docker-compose with the following command :

> `docker-compose -f docker-compose.dev.yaml up`

The server will be started in live reload mode, meaning every change in the source code will trigger a TypeScript compilation and a restart of the server.

The environment variables defined in the compose file are configuration properties given to NConf and can be edited.

## Test
To run the test suites, use the following command :

> `docker-compose -f docker-compose.test.yaml up`

This will start the application in a new container, and run the tests suites. The `coverage` environment variable specifies whether or not the code coverage is collected during the test suites.

## Production
The server can be run in production using the dockerfile of the project with the `NODE_ENV` environment variable set to `production`, or directly with docker-compose with the following command :
> `docker-compose up`

# Features
## TypeScript
This project uses [TypeScript](https://www.typescriptlang.org/) for source files. The project configuration is available in the `/tsconfig.json` file. Compiled JavaScript file are generated in the `/dist` directory. Type declarations and source map files generation are enabled.

## Logger
A [Bunyan](https://www.npmjs.com/package/bunyan) logger is included in this project. The logger configuration can be edited in `/src/logger.ts`. Code snipplet to use the logger :
```TypeScript
import logger from './logger';

logger.info('Hello world!');
```

## Lint
This project uses an [ESLint](https://eslint.org/) linter, along with [Prettier](https://prettier.io/) to format the code. The ESLint rules are based on the [Airbnb Eslint Config](https://www.npmjs.com/package/eslint-config-airbnb), and implements several other configs on top such as :
- `@typescript-eslint/recommended`
- `@typescript-eslint/recommended-requiring-type-checking`
- `promise/recommended`
- `prettier`
- `@typescript-eslint`

The Jest plugin is also installed to allow Jest and ESLint to work together properly.

To run a lint check, use the following command :
> `npm run lint`

To automatically fix linting errors, run the following command :
> `npm run lint:fix`

## Test
[Jest](https://jestjs.io/) is the testing framework used in this project. The framework is used with the [ts-jest](https://www.npmjs.com/package/ts-jest) to allow the writing and execution of tests in TypeScript without compilation.

Jest will execute every test file located in the `/spec` directory and ending with `.spec.ts`. The coverage report is generated in the LCOV format, and located in the `/coverage` directory.
