# Testes em React

## Tipos de teste

### Tests Unitários
- Testamos apenas um componente / unidade de código (componente ou função)
- Não é feito a chamada a APIs externas (APIs são outras unidades)
  - Caso o componente chama uma API, é preciso fazer um *mock*

### Testes de Integração
- São testes realizados em dois ou mais componentes trabalhando juntos
- Também são realizados *mocks*

### Testes End-to-End (E2E)
- É testado fluxos completos de usuário
- São feitos comunicações com APIs e banco de dados reais
- Podem levar muito mais tempo para serem executados
- Uma ferramenta bem popular é o *Cypress*

## Instalando o Jest

1. Instalar o Jest como depedência de desenvolvimento
```bash
yarn add -D jest
```

2. Adicionar suporte a JSX
```bash
yarn add -D @babel/preset-env @babel/preset-react
```

3. Adicioanar o arquivo `.babelrc` no projeto
```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

4. Adicionar o *React Testing Library*
```bash
yarn add -D @testing-library/react @testing-library/jest-dom
```

5. Adicionar suporte a SVG e CSS
```bash
yarn add -D jest-svg-transformer identity-obj-proxy
```

6. Adicionar as configurações do Jest no `package.json`
```json
"jest": {
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
}
```

7. Adicionar suporte a API de ambiente na web
```bash
yarn add -D jest-environment-jsdom
```

8. Adicionar configurações da API de ambiente na web no `package.json`
```json
"jest": {
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
}
```

9. (Opcional) Adicionar o pacote `@testing-library/jest-dom` e configurar o arquivo `setupTest.js` 
```bash
yarn add -D @testing-library/jest-dom
```
```json
"jest": {
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.js"
  ]
}
```
```js
import "@testing-library/jest-dom";
```

## Configurando o Jest para TS

1. Baixar as dependências do `jest` para `ts`
```bash
yarn add -D @types/jest ts-jest @babel/preset-typescript
```

2. Adicionar as configurações do `ts` no `package.json`
```json
"jest": {
  "verbose": true,
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
}
```

3. Adicionar os presets no `.babelrc`
```js
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    ["@babel/preset-env", { "targets": { "node": "current" }}],
    "@babel/preset-typescript"
  ]
}
```

## Usando Mock Service Worker (MSW) para mockar uma API

1. Instalar o MSW
```bash
yarn add -D msw
```

2. Criar um `worker` dentro do arquivo de teste
```ts
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const handler = http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    })
})

const worker = setupServer(handler)
```