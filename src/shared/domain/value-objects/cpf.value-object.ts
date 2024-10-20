import { ValueObject } from "../ValueObject";

export class Cpf extends ValueObject {
  private readonly cpf: string;

  constructor(cpf: string) {
    super();
    if (!this.isValidCPF(cpf)) {
      throw new Error('CPF inválido');
    }

    this.cpf = this.cleanCPF(cpf);
  }

  private cleanCPF(cpf: string): string {
    return cpf.replace(/[^\d]/g, '');
  }

  private isValidCPF(cpf: string): boolean {
    const cleanedCPF = this.cleanCPF(cpf);
    let sum = 0;

    if (cleanedCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanedCPF)) {
      return false;
    }

    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }

    let firstVerifier = 11 - (sum % 11);

    if (firstVerifier >= 10) firstVerifier = 0;

    if (firstVerifier !== parseInt(cleanedCPF.charAt(9))) {
      return false;
    }

    sum = 0;

    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }

    let secondVerifier = 11 - (sum % 11);

    if (secondVerifier >= 10) secondVerifier = 0;

    if (secondVerifier !== parseInt(cleanedCPF.charAt(10))) {
      return false;
    }

    return true;
  }

  public getValue(): string {
    return this.cpf;
  }
}