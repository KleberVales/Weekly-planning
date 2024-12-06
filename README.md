# Weekly Planner com Integração à API do ChatGPT

## Descrição
Este projeto é um planner semanal inspirado no estilo Tweek, desenvolvido como parte do MBA. Ele utiliza uma arquitetura modular com backend em Node.js e frontend em React.js. O planner inclui integração com a API do ChatGPT para oferecer funcionalidades inteligentes e personalizadas.

## Funcionalidades
- Planejamento semanal com interface amigável.
- Backend em arquitetura de microsserviços.
- Comunicação entre frontend e backend via APIs.
- Integração com a API do ChatGPT para sugestões e análises.
- Design responsivo e modular.
- Sistema baseado em eventos com Kafka.

## Tecnologias
- **Frontend**: React.js
- **Backend**: Node.js, arquitetura de microsserviços
- **Barramento de Eventos**: Kafka
- **Integração Inteligente**: OpenAI API (ChatGPT)
- **Banco de Dados**: Mysql

## Como Rodar o Projeto

- Pré-requisitos:
  * Node.js e npm/yarn instalados
  * Banco de dados configurado (se necessário)
  * Kafka configurado (se necessário)
  * API Key do ChatGPT
 
- Backend:
  ``` bash
   cd backend
   npm install
   npm start
  
  ```
- Frontend:
  ``` bash
    
   cd frontend
   npm install
   npm start

  ```

## Estrutura do Projeto
  ```
  Front-end\
    src\
      |- components\
      |- pages\
      |- services\

  ```
  ```
  Back-end\
      |- services\
      |      |- tasks\
      |- utils\

  ```

## Licença
Este projeto é apenas para fins acadêmicos e não possui uma licença específica.


  



