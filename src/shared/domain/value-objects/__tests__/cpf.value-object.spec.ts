import { Cpf } from '../cpf.value-object';

describe('CPF ValueObject Unit Tests', () => {
  test('should throw error when cpf is invalid', () => {
    expect(() => {
      new Cpf('12345678900');
    }).toThrow(new Error('CPF inválido'));

    expect(() => {
      new Cpf('123.456.789-00');
    }).toThrow(new Error('CPF inválido'));
  });

  test('should create a valid cpf', () => {
    let cpf = new Cpf('48934098830');

    expect(cpf.getValue()).toBe('48934098830');

    cpf = new Cpf('489.340.988-30');

    expect(cpf.getValue()).toBe('48934098830');
  });
});