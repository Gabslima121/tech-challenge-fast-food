import { Uuid } from 'src/shared/domain/value-objects/uuid.value-object';
import { Client } from '../Client';
import { Cpf } from 'src/shared/domain/value-objects/cpf.value-object';

describe('Client', () => {
  test('should be defined', () => {
    const client = new Client({
      name: 'Jhon Doe',
      email: '',
    });

    expect(client).toBeDefined();
  })

  describe('Constructor of Client', () => {
    test('constructor', () => {
      let client = new Client({
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
      })

      expect(client.clientId).toBeInstanceOf(Uuid);
      expect(client.name).toBe('Jhon Doe');
      expect(client.email).toBe('jhon@doe.com');
      expect(client.cpf).toBe(null);
      expect(client.createdAt).toBeInstanceOf(Date);

      let cpf = new Cpf('48934098830');

      client = new Client({
        name: 'Jhon Doe',
        email: 'jhon@doe.com',
        cpf,
      })

      expect(client.clientId).toBeInstanceOf(Uuid);
      expect(client.name).toBe('Jhon Doe');
      expect(client.email).toBe('jhon@doe.com');
      expect(client.cpf.getValue()).toBe('48934098830');
      expect(client.createdAt).toBeInstanceOf(Date);
    })

    describe("clientId field", () => {
      const arrange = [{ id: null }, { id: undefined }, { id: new Uuid() }];
  
      test.each(arrange)("should be %j", (props) => {
        const category = new Client(props as any);
        expect(category.clientId).toBeInstanceOf(Uuid);
      });
    });
  })
});

