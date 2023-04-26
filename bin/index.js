#!/usr/bin/env node
const calc = require('./calc.js');
const prompt = require('prompt-sync')();

const string = process.argv.slice(2).join(" ") || prompt("Enter a string: ");

console.log("\nIt would take precisely " + calc(string) + " to brute force this string.");