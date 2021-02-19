import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import gendiff from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = readFile('file1.json');
const file2 = readFile('file2.json');
const result1 = readFile('expected');
const result2 = readFile('notExpected');
const result3 = '{ }';

describe('get the differnce between two JSON files', () => {
  test('compare equality', () => {
    expect(gendiff(file1, file2)).toMatch(result1);
  });
  test('compare inequality', () => {
    expect(gendiff(file1, file2)).not.toMatch(result2);
  });
  test('compare inequality test2', () => {
    expect(gendiff(file1, file2)).not.toMatch(result3);
  });
});
