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

# Configurar mongodb (Somente para registro)

Obs: Este passo não é necessário, pois já subi a aplicação com banco configurado.

1°Acesse sua conta

2°Crie um novo cluster

3°Selecione a opção de aplicação

4°Copie a URL

5°Troque o password pela senha atual configurada: <password>

6°Mude o nome do banco de dados: mongodb.net/blog

Parametros de conexão mongoDB: https://mongoosejs.com/

# Instalação

Obs: Note que essas dependências precisam ser instalado a nível da pasta API.

1° yarn add express mongoose dotenv multer 

(Servidor expresso para conectar com nosso mongoose)

2°npm init (Manter padrão)

3°yarn add nodemon (Automatiza o reinicio da aplicação para reconhecer novas modificações)

4°yarn add bit crypt (Para proteger a visualização no postman de nossa senha registrada no mongodb. https://www.npmjs.com/package/bcrypt)

5°yarn global add node-gyp (Necessário executar comando para corrigir bug do bit crypt)

6°Caso o erro persistir, execute na seguinte ordem: yarn add bcrypt. E em seguida: yarn global add node-gyp.

# Executar projeto 

Comando para iniciar: yarn start



