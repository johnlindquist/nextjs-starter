#!/usr/bin/env node
const replace = require('replace-in-file');
const path = require('path');
const options = {

  //Glob(s) 
  files: [
    // path.join(__dirname, '../pages/home/index.jsx')
    path.join(__dirname, '../src/**/*'),
    path.join(__dirname, '../pages/**/*')
  ],

  //Replacement to make (string or regex) 
  from: [
    /from ("|')(\.)+(.*)(Components|Screens|Util|Layout)\//g,
    /\/components\//g,
    /\/screen\//g
  ],
  to: [
    'from $1@$4/',
    '/Components/',
    '/Screens/'
  ]
};

try {
  let changedFiles = replace.sync(options);
  console.log('Modified files:', changedFiles.join(', '));
} catch (error) {
  console.error('Error occurred:', error);
}
