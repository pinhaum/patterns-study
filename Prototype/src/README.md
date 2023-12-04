# Prototype Pattern


- para rodar o projeto
- ``npm install -g typescript``
- na pasta Prototype
- rodar ``tsc``
- rodar ``node dist/index.js``

---
temos como implementação de prototype uma representação de gameObject
temos a interface Cloneable que dita que o método clone deve estar prasente em sua implementação
temos a classe GameObject para gerar um objeto dentro de um jogo
podemos assim gerar um objeto Pedestrian e, a cada instância necessária de outro Pedestrian, podemos chamar o método clone para gerar um novo Pedestrian com base no primeiro