import { beforeAll, describe, test } from '@jest/globals';
import fs from 'fs';
import statement from '../../src/chapter1';

describe('execute statement', () => {
  beforeAll(() => {
    return initializeData();
  });
  test('should ', () => {
    console.log(statement(invoices, plays));
  });
});

const initializeData = () => {
  const invoices = JSON.parse(fs.readFileSync('./data/invoices.json', 'utf-8'));
  const plays = JSON.parse(fs.readFileSync('./data/plays.json', 'utf-8'));
  return invoices, plays;
};
