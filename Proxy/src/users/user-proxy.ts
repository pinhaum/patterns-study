import { Address, User } from "./user";
import { AdminUser } from "./admin-user";

export class UserProxy implements User {
  private realUser: User | null;
  private realUserAdresses: Address[] | null

  constructor(public firstname: string, public username: string) {
    this.firstname = firstname
    this.username = username
  }

  private createUser(): User {
    if (!this.realUser) {
      this.realUser = new AdminUser(this.firstname, this.username)
    }

    return this.realUser;
  }

  async getAddresses(): Promise<Address[]> {
    this.realUser = this.createUser()

    if (!this.realUserAdresses) {
      this.realUserAdresses = await this.realUser.getAddresses()
    }

    return this.realUserAdresses;
  }
}