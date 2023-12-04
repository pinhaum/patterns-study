export type Address = {
  street: string;
  number: number;
}

export interface User {
  firstname: string;
  username: string;

  getAddresses(): Promise<Address[]>
}