# blogNode

# Yarn
Usar comando de instalação de depência yarn

Como instalar o yarn?
https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

Basicamente é só executar o comando através do cmd: npm install --global yarn

Verificar instalação: yarn --version
(Utilizar terminal cmd, caso utilizar em outro tipo de terminal não irá funcionar!)

Por que optei por Yarn?
O Yarn melhora nosso tempo de download de pacotes.

# Configurar mongodb para rodar sem docker

1°Acesse sua conta mongodb

2°Crie um novo cluster

3°Selecione a opção de aplicação

4°No arquivo .env substitua a URL exemplo pela sua. (O correto é não deixar configurado a URL para subir em repositório, mas para agilizar o processo de teste, deixei fixo!)

5°Troque o password pela senha atual configurada: password

6°Mude o nome do banco de dados: mongodb.net/NAME OF YOUR DATABASE

Parametros de conexão mongoDB: https://mongoosejs.com/

# Instalação

Executar comando: yarn
(Desta forma será instalada todas depedências já declarada em nosso package.json).

# Executar projeto sem docker

Comando para iniciar: 
yarn start <- Em produção
yarn dev <- Em desenvolvimento


# Como executar o projeto com docker

Comando para iniciar: docker-compose up

# Como testar?

localhost:3001/routes/function/parametro <- Com docker

Caso houver dúvidas você pode consultar a "Documentação API blog.pdf" em nosso tópico "Realizando testes com postman".


