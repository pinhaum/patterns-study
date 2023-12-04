# Proxy Pattern


- para rodar o projeto
- ``npm install -g typescript``
- na pasta Proxy
- rodar ``tsc``
- rodar ``node dist/index.js``

---
temos como implementação de proxy uma simulação de cadastro de usuários
temos a interface User que dita o padrão de todos os usuários
temos a classe UserAdmin que seria utilizada para gerar um usuário do tipo Admin
temos a classe UserProxy que está funcionando como o Proxy de criação de Usuário para cadastro e busca no banco de dados
as "chamadas ao banco" estão simuladas para um objeto JSON
