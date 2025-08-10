const { factorial, fibonacci } = require('./math');

describe('Pruebas para funciones matemáticas', () => {
  describe('Pruebas para factorial()', () => {
    test('debería calcular el factorial de 0 correctamente', () => {
      expect(factorial(0)).toBe(1);
    });

    test('debería calcular el factorial de 5 correctamente', () => {
      expect(factorial(5)).toBe(120); 
    });

    test('debería lanzar un error para números negativos', () => {
      expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos.');
    });
  });

  describe('Pruebas para fibonacci()', () => {
    test('debería retornar 0 para la posición 0', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('debería retornar 1 para la posición 1', () => {
      expect(fibonacci(1)).toBe(1);
    });

    test('debería calcular el número de Fibonacci en la posición 7 correctamente', () => {
      expect(fibonacci(7)).toBe(13); 
    });

    test('debería lanzar un error para números negativos', () => {
      expect(() => fibonacci(-1)).toThrow('La secuencia de Fibonacci no está definida para números negativos.');
    });
  });
});
