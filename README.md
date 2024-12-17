# Projeto MBA Web

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
./bin/zookeeper-server-start.sh ./config/zookeeper.properties
```
2. inicie o Kafka
``` bash
./bin/kafka-server-start.sh ./config/server.properties
```
3. Iniciar os serviços backend (cada microserviço):
- Compromisso Service:
 ``` bash
   cd backend/compromisso-service
   npm run dev
 ```




