import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import parser from './parsers.js';

export default (file1, file2) => {
  const fileData1 = fs.readFileSync(file1, 'utf-8');
  const fileData2 = fs.readFileSync(file2, 'utf-8');

  const fileFormat1 = path.extname(file1);
  const fileFormat2 = path.extname(file2);

  let parse;

  if (fileFormat1 === '.yaml' || fileFormat2 === '.yaml') {
    parse = yaml.load;
  } else if (fileFormat1 === '.json' || fileFormat2 === '.json') {
    parse = JSON.parse;
  }

  return parser(parse(fileData1), parse(fileData2));
};
