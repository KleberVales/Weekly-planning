# Projeto MBA Web - Planner Semanal

Este é um projeto desenvolvido como parte do MBA, que envolve a criação de um sistema web com **microserviços**, **Kafka** para comunicação assíncrona, **MongoDB** como banco de dados e integração com o **ChatGPT**. O sistema tem como objetivo gerenciar compromissos e informações de forma eficiente.

## **Tecnologias Utilizadas**

- **Frontend**:
  - React.js
  - React Router
  - Axios para integração com APIs
  - CSS para estilização
- **Backend**:
  - Node.js
  - Express.js
  - Kafka para comunicação assíncrona entre microserviços
  - MongoDB (via Prisma) para armazenamento de dados
  - API do ChatGPT para processamento de dados
- **Infraestrutura**:
  - Kafka (para gerenciar eventos entre microserviços)
  - Docker (para contêinerizar os serviços, se necessário)

## **Instalação e Execução**

### 1. **Clonar o Repositório**

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```
### 2. **Instalar Dependências**
Navegue para o diretório do frontend e backend e instale as dependências.

- Frontend
``` bash
cd frontend
npm install

```
- Backend (para cada microserviço):
``` bash
cd backend/compromisso-service
npm install

cd backend/informacao-service
npm install

cd backend/event-bus
npm install

```
### 3. **Configurar o Ambiente**
Crie um arquivo .env para o backend com as configurações necessárias:

``` env
MONGODB_URI=mongodb://localhost:27017/seu_banco_de_dados
KAFKA_BROKER=localhost:9092
```
Se estiver usando o ChatGPT API, adicione também a chave da API:

``` env
OPENAI_API_KEY=your_openai_api_key
```
### 4. **Rodar os Serviços**

Backend:
1. Inicie o Zookeeper:
``` bash
bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
```
2. inicie o Kafka
``` bash
bin\windows\kafka-server-start.bat .\config\server.properties
```
3. Iniciar os serviços backend (cada microserviço):
- Compromisso Service:
 ``` bash
 cd backend/compromisso-service
 npm run dev
 ```
- Informacao Service:
``` bash
cd backend/informacao-service
npm run dev
```
- Event Bus:
``` bash
cd backend/event-bus
npm run dev
```
Frontend:
1. Inicie o servidor de desenvolvimento:
``` bash
cd frontend
npm start
```
### Estrutura Geral do Projeto
``` Plaintext
Projeto-MBA-Web/
├── backend/
│   ├── compromisso-service/
│   │   ├── src/
│   │   │   ├── models/
│   │   │   │   └── compromisso.model.js   # Definição do modelo Prisma para compromissos
│   │   │   │   └── compromisso.routes.js  # Rotas para CRUD de compromissos e integração com Kafka/ChatGPT
│   │   │   ├── kafka/
│   │   │   │   ├── producer.js            # Produz mensagens para Kafka
│   │   │   │   └── consumer.js            # Consome mensagens de Kafka
│   │   │   ├── chatgpt/
│   │   │   │   └── chatgpt.js             # Integração com a API do ChatGPT
│   │   │   ├── prisma-client.js           # Configuração do Prisma Client
│   │   │   ├── server.js                  # Configuração do servidor Express
│   │   │   ├── config/
│   │   │   │   └── database.js            # Configuração da conexão com MongoDB
│   │   ├── prisma/
│   │   │   └── schema.prisma              # Definição do modelo Prisma
│   │   ├── .env                           # Variáveis de ambiente para o serviço
│   │   ├── package.json                   # Dependências do serviço
│   │   ├── Dockerfile                     # Configuração Docker do compromisso-service
│   │   └── README.md                      # Documentação do compromisso-service
│   │   ├── prisma/
│   │   │   └── schema.prisma              # Definição do modelo Prisma
│   │   ├── .env                           # Variáveis de ambiente para o serviço
│   │   ├── package.json                   # Dependências do serviço
│   │   ├── Dockerfile                     # Configuração Docker do compromisso-service
│   │   └── README.md                      # Documentação do compromisso-service
│   ├── informacao-service/
│   │   ├── src/
│   │   │   ├── models/
│   │   │   │   └── informacao.model.js    # Definição do modelo Prisma para informações
│   │   │   ├── routes/
│   │   │   │   └── informacao.routes.js   # Rotas para informações e consumo de Kafka
│   │   │   ├── kafka/
│   │   │   │   ├── producer.js            # Produz mensagens para Kafka
│   │   │   │   └── consumer.js            # Consome mensagens de Kafka
│   │   │   ├── prisma-client.js           # Configuração do Prisma Client
│   │   │   ├── server.js                  # Configuração do servidor Express
│   │   │   ├── config/
│   │   │   │   └── database.js            # Configuração da conexão com MongoDB
│   │   ├── prisma/
│   │   │   └── schema.prisma              # Definição do modelo Prisma
│   │   ├── .env                           # Variáveis de ambiente para o serviço
│   │   ├── package.json                   # Dependências do serviço
│   │   ├── Dockerfile                     # Configuração Docker do informacao-service
│   │   └── README.md                      # Documentação do informacao-service
│   ├── event-bus/
│   │   ├── src/
│   │   │   ├── kafka/
│   │   │   │   ├── producer.js            # Produz mensagens para Kafka
│   │   │   │   └── consumer.js            # Consome mensagens de Kafka
│   │   │   └── server.js                  # Configuração do servidor do Event Bus
│   │   ├── .env                           # Variáveis de ambiente para o Event Bus
│   │   ├── package.json                   # Dependências do Event Bus
│   │   ├── Dockerfile                     # Configuração Docker do Event Bus
│   │   └── README.md                      # Documentação do Event Bus
│   ├── docker-compose.yml                 # Orquestração de todos os serviços Docker
│   ├── README.md                          # Documentação geral do backend
├── frontend/
│   ├── public/
│   │   └── index.html                     # Arquivo HTML principal
│   ├── src/
│   │   ├── assets/                        # Imagens e estilos
│   │   │   ├── styles.css                 # Estilos globais
│   │   ├── components/                    # Componentes reutilizáveis


```

### Licença




