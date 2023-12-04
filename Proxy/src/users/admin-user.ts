import { Address, User } from "./user";

export class AdminUser implements User {
  constructor(public firstname: string, public username: string) {
    this.firstname = firstname
    this.username = username
  }

  async getAddresses(): Promise<Address[]> {
    return new Promise((resolve, reject) => {
      // mock conexão com banco de dados
      return setTimeout(() => {
        return resolve([
          { street: 'Rua Djalma Fonseca Caldas', number: 184 },
          { street: 'Rua Vicente Machado', number: 308 },
          { street: 'Rua dos Bobos', number: 0 }
        ])
      }, 1000)
    })
  }
}