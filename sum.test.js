const suma = require('./sum');
const request = require('supertest');

test ('Suma 1+2 debe de dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});