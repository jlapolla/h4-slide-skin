#!/usr/local/bin/node

/**
 * Run Javascript tests
 *
 * This script is the same as running "jasmine" from the command line,
 * but it does not require Jasmine to be installed globally.
 */

var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
