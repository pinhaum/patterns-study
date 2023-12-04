import { UserProxy } from "./users/user-proxy";

async function execute(): Promise<void> {
  const user = new UserProxy('Gabriel', 'gabriel.ramos')
  console.log('Simulando busca em banco de dados por 1 segundos');
  console.log(await user.getAddresses());

  console.log('simulando cache do proxy')
  for (let i = 0; i < 4; i++) {
    console.log(await user.getAddresses());
  }

}

execute();