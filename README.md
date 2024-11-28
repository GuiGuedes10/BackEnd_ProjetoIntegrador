# API de Gerenciamento de Treinos

## Visão Geral
Uma API backend para gerenciamento de sessões de treino, exercícios e contas de usuários. Construída com Node.js, Express e Banco de Dados Oracle usando Sequelize ORM.

## Stack Técnica
- Node.js
- Express.js
- Banco de Dados Oracle
- Sequelize ORM
- Autenticação JWT
- bcrypt para hash de senhas
- Suporte a Docker

## Funcionalidades Principais
1. Gerenciamento de Usuários
    - Registro de usuários
    - Autenticação (login/logout)
    - Validação de token
    - Papéis de usuário (Administrador, Gerente, Usuário)

2. Gerenciamento de Exercícios
    - Criar exercícios
    - Personalizar exercícios por usuário
    - Acompanhar detalhes dos exercícios (repetições, séries, peso)

3. Gerenciamento de Treinos
    - Criar programas de treino
    - Atribuir exercícios aos programas de treino
    - Acompanhar sessões de treino
    - Monitorar progresso dos treinos

4. Gerenciamento de Sessões de Treino
    - Iniciar sessões de treino
    - Finalizar sessões de treino
    - Acompanhar duração da sessão
    - Registrar exercícios concluídos

## Modelos do Banco de Dados
1. Usuário (Pi_User)
    - Informações básicas do usuário
    - Detalhes de autenticação
    - Gerenciamento de papéis

2. Exercício
    - Definições de exercícios
    - Parâmetros padrão

3. Exercício_Usuário
    - Personalização de exercícios específicos por usuário
    - Configurações pessoais de exercícios

4. Treino_Usuário
    - Definições de programa de treino
    - Planos de treino específicos por usuário

5. Sessão_Treino_Usuário
    - Acompanhamento de sessão de treino
    - Horários de início/fim
    - Status de conclusão

## Endpoints da API

### Autenticação
- POST /login - Autenticação de usuário
- POST /validate-token - Validação de token

### Usuários
- GET /get_usuarios - Listar todos os usuários
- POST /cadastro_usuario - Registrar novo usuário

### Exercícios
- POST /create-exercise - Criar novo exercício
- POST /create-user-exercise - Criar exercício específico para usuário

### Treinos
- GET /get-training - Obter detalhes do treino
- POST /create-user-training - Criar novo programa de treino
- GET /get-user-training-by-user-id - Obter programas de treino do usuário

### Sessões de Treino
- GET /get-training-session - Obter detalhes da sessão
- POST /create-training-session - Iniciar nova sessão de treino
- GET /get-all-user-session - Obter histórico de sessões do usuário
- POST /end-user-training-session - Finalizar sessão ativa
- GET /get-time-training-session - Obter duração da sessão

## Configuração de Ambiente
Variáveis de ambiente necessárias:
- PORT - Porta da API
- USER_BD - Nome de usuário do banco de dados
- PASS_DB - Senha do banco de dados
- HOST_DB - Host do banco de dados
- NAME_DB - Nome do banco de dados
- JWT_KEY - Chave secreta JWT

## Suporte Docker
Inclui Dockerfile para containerização com as seguintes especificações:
- Imagem base: node:lts
- Porta exposta: 3000
- Diretório de trabalho: /usr/src/projeto-integrador-api

## Instruções de Configuração
1. Clonar repositório
2. Copiar .env.example para .env e configurar variáveis
3. Instalar dependências: `npm install`
4. Iniciar servidor: `node index.js`

## Recursos de Segurança
- Hash de senha usando bcrypt
- Autenticação baseada em JWT
- Controle de acesso baseado em papéis
- Middleware de validação de token