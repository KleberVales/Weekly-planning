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



