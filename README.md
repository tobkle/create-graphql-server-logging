[![npm version](https://badge.fury.io/js/create-graphql-server-logging.svg)](http://badge.fury.io/js/create-graphql-server-logging) [![Build Status](https://travis-ci.org/tobkle/create-graphql-server-logging.svg?branch=master)](https://travis-ci.org/tobkle/create-graphql-server-logging) [![Coverage Status](https://coveralls.io/repos/github/tobkle/create-graphql-server-logging/badge.svg?branch=master)](https://coveralls.io/github/tobkle/create-graphql-server-logging?branch=master)

# create-graphql-server-logging

Adds logging functions to the GraphQL-Server-Generator: **create-graphql-server**

```javascript
import { getLogFilename, logger } from 'create-graphql-server-logging';
```

adds functions:
* getLogFilename
* logger

With getLogFilename it determines the loggers path and filename from your package.json section.
The logger function provides a winston logging environment.

## Usage
Your server logs now all Graphql requests and nice formatted queries to the log file, which you've defined. This works only with loglevel = debug. It also allows logfile sizes of 5 MB and maximum 5 logfiles.

## Installation

```bash
yarn add create-graphql-server-logging
```

In the create-graphql-server project add the following lines to server/index.js, so you are adding the logger to the server's context. Afterwards you can use it for example in your model files with "this.context.log".
```javascript
...
import { getLogFilename, logger } from 'create-graphql-server-logging'; // <===
const log = logger(getLogFilename()); // <=== here
...

app.use('/graphql', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, me) => {
    req.context = addModelsToContext({ db, pubsub, me, UserCollection, log }); // <=== here
    graphqlExpress(() => {
    ...
    ...
    })
  })
});
```

Add in package.json the following section:
```javascript
"scripts": {
  ...
},
"config": {										// <===
  "logfile": "log/all-logs-readable.log",		// <===
  "loglevel": "debug",							// <===
  "maxsize": 5,									// <===
  "maxfiles": 5									// <===
},
```

## API Documentation
[Goto API Documentation](https://tobkle.github.io/create-graphql-server-logging/)

