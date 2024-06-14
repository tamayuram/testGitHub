// Import the assert module from Node.js
const assert = require('assert');

// Import the calculateDaysBetweenDates function
const calculateDaysBetweenDates = require('./test');

// Test case 1: Calculate days between two dates
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01'), new Date('2022-01-10')), 9);

// Test case 2: Calculate days between two dates with same date
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01'), new Date('2022-01-01')), 0);

// Test case 3: Calculate days between two dates with negative result
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-10'), new Date('2022-01-01')), -9);

// Test case 4: Calculate days between two dates with different timezones
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-10T00:00:00+05:30')), 9);

// Test case 5: Calculate days between two dates with leap year
assert.strictEqual(calculateDaysBetweenDates(new Date('2020-02-28'), new Date('2020-03-01')), 2);

// Test case 6: Calculate days between two dates with daylight saving time
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-03-12T00:00:00-08:00'), new Date('2022-03-13T00:00:00-07:00')), 0);

// Test case 7: Calculate days between two dates with different time of day
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01T12:00:00'), new Date('2022-01-02T06:00:00')), 1);

// Test case 8: Calculate days between two dates with different time of day and timezones
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01T12:00:00Z'), new Date('2022-01-02T06:00:00+05:30')), 1);

// Test case 9: Calculate days between two dates with negative milliseconds
assert.strictEqual(calculateDaysBetweenDates(new Date('2022-01-01T00:00:00'), new Date('2021-12-31T23:59:59')), -1);

// Test case 10: Calculate days between two dates with large difference
assert.strictEqual(calculateDaysBetweenDates(new Date('2000-01-01'), new Date('2022-01-01')), 8035);

// All test cases passed
console.log('All test cases passed!');