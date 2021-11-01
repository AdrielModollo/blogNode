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

# Configurar mongodb 

1°Acesse sua conta mongodb

2°Crie um novo cluster

3°Selecione a opção de aplicação

4°Renomeie o arquivo "example.env" para somente ".env" 

5°No arquivo .env substitua a URL exemplo pela sua. (Não configurei dentro do arquivo .env a URL para evitar expor as variaveis em repositório)

6°Troque o password pela senha atual configurada: <password>

7°Mude o nome do banco de dados: mongodb.net/<NAME OF YOUR DATABASE>

Parametros de conexão mongoDB: https://mongoosejs.com/

# Instalação

Executar comando: yarn
(Desta forma será instalada todas depedências já declarada em nosso package.json).

# Executar projeto 

Comando para iniciar: yarn start

# Como testar?

localhost:5000/routes/parametro

Caso houver dúvidas você pode consultar a "Documentação API blog.pdf" em nosso tópico "Realizando testes com postman".


