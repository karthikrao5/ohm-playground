//The Grammar matches a syntax for a regular language

var fs = require('fs');
var ohm = require('ohm-js');
var contents = fs.readFileSync('./src/Playground.ohm');
var grammar = ohm.grammar(contents);

export default grammar;

