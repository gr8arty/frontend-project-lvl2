#!/usr/bin/env node

import program  from 'commander';

program
    .version('0.0.1')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    
program.parse(process.argv);

const options = program.opts();
if (options.help || options.h) program.help();
if (options.version || options.V) program.version();
if (options.format || options.f) program.action();
