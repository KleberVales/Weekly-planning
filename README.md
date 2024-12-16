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
  
- Kafka
  ``` bash
  bin/zookeeper-server-start.sh config/zookeeper.properties
  bin/kafka-server-start.sh config/server.properties
  bin/kafka-topics.sh --create --topic meu-topico --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

  ```
- Frontend:
  ``` bash
    
   cd frontend
   npm install
   npm start

  ```

## Estrutura do Projeto
<<<<<<< HEAD
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
=======
 

## Licença
Este projeto é apenas para fins acadêmicos e não possui uma licença específica.
>>>>>>> afcd95b03c9929c4bd139b9caf62b589a52db9d0


  



