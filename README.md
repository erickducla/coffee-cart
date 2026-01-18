# Coffee Cart - Testes E2E com Cypress

Projeto de automação de testes end-to-end (E2E) para a aplicação **Coffee Cart**, uma loja online de cafés. Os testes são implementados usando **Cypress** com **Cucumber (BDD)** para garantir a qualidade e funcionalidade da plataforma.

## 📋 Sobre o Projeto

O Coffee Cart é uma aplicação web de comércio eletrônico focada em venda de cafés. Este projeto automatiza os principais fluxos de negócio da aplicação, incluindo:

- ✅ Listar e visualizar catálogo de cafés
- ✅ Adicionar cafés ao carrinho de compras
- ✅ Aplicar promoções e ofertas especiais
- ✅ Processo de checkout e pagamento
- ✅ Gerenciamento do carrinho de compras

## 🛠️ Tecnologias Utilizadas

- **Cypress** (v15.9.0) - Framework de automação E2E
- **Cucumber** (BDD) - Linguagem Gherkin para especificação de testes
- **@badeball/cypress-cucumber-preprocessor** - Integração Cucumber com Cypress
- **JavaScript** - Linguagem de implementação
- **Faker.js** - Geração de dados aleatórios para testes

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                          # Arquivos de teste em formato Gherkin (.feature)
│   ├── coffee-promotion.feature  # Testes de promoção de cafés
│   └── list-coffees.feature      # Testes de listagem de catálogo
├── fixtures/                     # Dados estáticos para testes
│   └── example.json
├── support/                      # Configurações e helpers
│   ├── commands.js               # Comandos customizados do Cypress
│   ├── e2e.js                    # Configuração dos testes E2E
│   ├── api/
│   │   └── list.api.js           # Helpers para requisições de API
│   ├── pages/
│   │   ├── cart.page.js          # Page Object - Carrinho
│   │   ├── home.page.js          # Page Object - Home
│   │   └── payment.page.js       # Page Object - Pagamento
│   └── step-definitions/         # Definições de steps Gherkin
│       ├── coffee-cart.js        # Steps do fluxo de carrinho
│       └── list.js               # Steps do fluxo de listagem
│
├── cypress.config.js             # Configuração principal do Cypress
├── cypress.env.json              # Variáveis de ambiente
├── package.json                  # Dependências e scripts
└── README.md                      # Este arquivo
```

## 🚀 Configuração e Instalação

### Pré-requisitos

- **Node.js** (v14+)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd coffe-cart-cypress
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Executar todos os testes:
```bash
npx cypress run
```

### Executar testes em modo interativo (Cypress UI):
```bash
npx cypress open
```

### Executar testes de um arquivo específico:
```bash
npx cypress run --spec cypress/e2e/coffee-promotion.feature
```

### Executar testes em headless mode com screenshots:
```bash
npx cypress run --headless
```

## 📝 Cenários de Teste

### Coffee Promotion
Testa o fluxo completo de compra com promoção:
- Acesso à loja de cafés
- Seleção de múltiplos cafés
- Exibição e aceitação de oferta promocional
- Validação do carrinho com itens promocionais
- Remoção de itens
- Finalização do pagamento
- Validação de mensagem de sucesso

### List Coffees
Testa a funcionalidade de listagem e catálogo:
- Visualização do catálogo de cafés
- Verificação de produtos disponíveis
- Detalhes e informações dos produtos

## 🏗️ Padrões de Design

### Page Object Model (POM)
O projeto utiliza o padrão Page Object para encapsular os elementos e ações das páginas:

- `home.page.js` - Página inicial da loja
- `cart.page.js` - Página do carrinho de compras
- `payment.page.js` - Página de pagamento

### BDD com Gherkin
Os testes são descritos em português usando a sintaxe Gherkin, permitindo comunicação clara entre stakeholders e desenvolvimento.

## ⚙️ Configurações

### cypress.config.js
- **baseUrl**: https://coffee-cart.app/
- **Viewport**: 1280x720
- **Screenshots**: Habilitados em caso de falha
- **Preprocessor**: Cypress Cucumber com esbuild

### cypress.env.json
Arquivo para variáveis de ambiente específicas (não incluído no repositório por segurança).

## 🔧 Dependências Principais

```json
{
  "cypress": "^15.9.0",
  "@badeball/cypress-cucumber-preprocessor": "^24.0.0",
  "@bahmutov/cypress-esbuild-preprocessor": "^2.2.8",
  "@faker-js/faker": "^10.2.0",
  "esbuild": "^0.27.2"
}
```

## 📊 Relatórios

Os relatórios de teste são gerados automaticamente:
- **Screenshots** - Capturados em caso de falha (diretório: `cypress/screenshots`)