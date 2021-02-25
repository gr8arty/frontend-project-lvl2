import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import gendiff from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const jsonFile1 = '../file1.json';
const jsonFile2 = '../file2.json';
const yamlFile1 = '../file1.yaml';
const yamlFile2 = '../file2.yaml';

const result1 = readFile('expected');
const result2 = readFile('notExpected');
const result3 = '{ }';

describe('get the differnce between JSON files', () => {
  test('compare equality', () => {
    expect(gendiff(jsonFile1, jsonFile2)).toMatch(result1);
  });
  test('compare inequality', () => {
    expect(gendiff(jsonFile1, jsonFile2)).not.toMatch(result2);
  });
  test('compare inequality #2', () => {
    expect(gendiff(jsonFile1, jsonFile2)).not.toMatch(result3);
  });
});

describe('get the differnce between Yaml files', () => {
  test('compare equality', () => {
    expect(gendiff(yamlFile1, yamlFile2)).toMatch(result1);
  });
  test('compare inequality', () => {
    expect(gendiff(yamlFile1, yamlFile2)).not.toMatch(result2);
  });
  test('compare inequality #2', () => {
    expect(gendiff(yamlFile1, yamlFile2)).not.toMatch(result3);
  });
});

describe('get the differnce between JSON and Yaml files', () => {
  test('compare equality between JSON and Yaml', () => {
    expect(gendiff(yamlFile1, jsonFile2)).toMatch(result1);
  });
});
