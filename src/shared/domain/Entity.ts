import { ValueObject } from "./ValueObject";

export abstract class Entity {
  abstract get entityId(): ValueObject;
  abstract toJSON(): any;
}