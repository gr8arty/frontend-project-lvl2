#!/usr/bin/env node

import program from 'commander';
import path from 'path';
import genDiff from '../src/index.js';

program
  .version('0.0.1')
  .arguments('[filepath1 [filepath2]')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    try {
      try {
        if (!filepath1 && filepath2) {
          throw new Error('Specify the first argument!');
        } if (!filepath2 && filepath1) {
          throw new Error('Specify the second argument!');
        } if (!filepath1 && !filepath2) {
          throw new Error('Specify two valid files of .json or .yaml type as arguments.');
        }
      } catch (e) {
        console.error(e.message);
      } finally {
        const path1 = path.resolve('.', filepath1);
        const path2 = path.resolve('.', filepath2);

        const diff = genDiff(path1, path2);
        console.log(diff);
      }
    } catch (e) {
      console.error(e.message);
    }
  });

program.parse(process.argv);

const options = program.opts();
if (options.help || options.h) program.help();
if (options.version || options.V) program.version();
if (options.format || options.f) program.help();
