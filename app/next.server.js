#!/usr/bin/env node
require('@babel/register')(
  require('../.babelrc.app')
);
require('./next.server.es6');
