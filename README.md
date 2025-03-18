# 🏛️ Clean Architecture

A **Clean Architecture** é um modelo arquitetural que promove **separação de preocupações**, **baixo acoplamento** e **alta coesão**. Criada por Robert C. Martin (Uncle Bob), essa abordagem facilita a **manutenção, escalabilidade e testabilidade** dos sistemas.

## 📂 Estrutura de Camadas
A Clean Architecture organiza o código em **camadas independentes**, onde as regras de negócio não dependem de detalhes externos, como frameworks ou bancos de dados.

### 🔹 **Domain (Domínio)**
- Contém as **regras de negócio puras**, **entidades** e **validações**.
- Não depende de outras camadas.
- É onde a lógica principal do sistema acontece.

📌 **Exemplo:** Modelos de domínio e validações de regras de negócio.

---
### 🔹 **Application (Aplicação)**
- Define os **casos de uso** do sistema.
- Orquestra o fluxo da aplicação, chamando os repositórios e serviços necessários.
- Também chamada de **Service Layer**.

📌 **Exemplo:** Um caso de uso "Criar Projeto" chamaria um repositório para salvar os dados e aplicaria validações antes disso.

---
### 🔹 **Infrastructure (Infraestrutura)**
- Implementação de tecnologias externas (ORMs, APIs, Banco de Dados, Mensageria, etc.).
- Responsável por fornecer **implementações concretas** para interfaces definidas no domínio.

📌 **Exemplo:** Implementação do repositório usando TypeORM ou Prisma.

---
### 🔹 **Presentation (Apresentação)**
- Ponto de entrada do sistema (Controllers, GraphQL Resolvers, etc.).
- Recebe as requisições e as encaminha para a camada de **Application**.

📌 **Exemplo:** Um controller NestJS que recebe um `POST /projects` e aciona o caso de uso correspondente.

## 🎯 Benefícios da Clean Architecture
✅ **Baixo acoplamento:** A lógica do negócio não depende de frameworks externos.
✅ **Alta testabilidade:** Fácil de testar, pois cada camada tem uma responsabilidade clara.
✅ **Fácil manutenção:** Alterações em infraestrutura não afetam as regras de negócio.
✅ **Escalabilidade:** Permite crescimento modular sem comprometer o código.

## 🔄 Fluxo de Dados
1️⃣ O usuário interage com a **camada de apresentação**.
2️⃣ A requisição é processada e encaminhada para **casos de uso na aplicação**.
3️⃣ Os **casos de uso** interagem com **o domínio** e chamam os **repositórios**.
4️⃣ Os **repositórios** obtêm ou armazenam dados na **infraestrutura**.
5️⃣ A resposta retorna ao usuário seguindo o caminho inverso.

## 🏆 Conclusão
A **Clean Architecture** é essencial para construir sistemas **modulares, robustos e fáceis de manter**. Ao seguir essa abordagem, garantimos que o código se mantenha **organizado e preparado para evoluções futuras**. 🚀
