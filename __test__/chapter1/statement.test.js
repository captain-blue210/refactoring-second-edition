import { beforeAll, describe, expect, test } from '@jest/globals';
import fs from 'fs';
import { htmlStatement, statement } from '../../src/chapter1/statement';

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

  test('should', () => {
    const expected = `<h1>Statement for BigCo</h1>
<table>
  <tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>Amount earned <em>47</em> credits</p>
`;

    const result = htmlStatement(invoices[0], plays);
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
