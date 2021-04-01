import { beforeAll, describe, expect, test } from '@jest/globals';
import fs from 'fs';
import { statement } from '../../src/chapter1';

describe('execute statement', () => {
  let invoices, plays;
  beforeAll(() => {
    invoices = initializeInvoicesData();
    plays = initializePlaysData();
  });
  test('should ', () => {
    const expected = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00You earned 47 credits
`;

    const result = statement(invoices[0], plays);
    expect(result).toBe(expected);
  });
});

const initializeInvoicesData = () => {
  const invoices = JSON.parse(
    fs.readFileSync('__test__/chapter1/data/invoices.json', 'utf-8'),
  );
  return invoices;
};

const initializePlaysData = () => {
  const plays = JSON.parse(
    fs.readFileSync('__test__/chapter1/data/plays.json', 'utf-8'),
  );
  return plays;
};
