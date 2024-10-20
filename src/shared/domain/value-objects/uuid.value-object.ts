import { v4 as uuid, validate as validateUuid } from 'uuid';
import { ValueObject } from "../ValueObject";

export class Uuid extends ValueObject {
  public readonly id: string;

  constructor(id?: string) {
    super();
    this.id = id || uuid();
    this.validate();
  }

  private validate() {
    const isValid = validateUuid(this.id);

    if (!isValid) {
      throw new InvalidUuidError('Invalid UUID');
    }
  }

  toString() {
    return this.id;
  }
}

export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || "ID must be a valida UUID");
    this.name = "InvalidUuidError";
  }
}