<img src="tutorial/public/logo.svg" alt="JavaScripto" width="220" />

Plataforma de ensino de JavaScript para brasileiros.

O aluno aprende lógica de programação e JavaScript usando uma sintaxe em pt-BR. Palavras-chave como `se`, `senao`, `enquanto`, `funcao`, `retorne` são transpiladas para JavaScript válido antes de serem executadas.

## Por que JavaScripto?

A barreira do idioma é real. Quem está aprendendo a programar lida simultaneamente com:

- Lógica de programação (o conceito em si)
- Sintaxe da linguagem (regras, símbolos, estrutura)
- Vocabulário em inglês (`function`, `return`, `while`, `catch`...)

JavaScripto remove a terceira barreira. O aluno foca em **entender** o que está fazendo, não em memorizar palavras em outro idioma. Quando estiver confortável com os conceitos, a transição para JavaScript padrão é natural.

## Como funciona

O aluno escreve código em pt-BR:

```
funcao saudacao(nome) {
  se (nome) {
    retorne `Olá, ${nome}!`
  } senao {
    retorne "Olá, mundo!"
  }
}

imprima(saudacao("Maria"))
```

O transpilador converte para JavaScript válido:

```js
function saudacao(nome) {
  if (nome) {
    return `Olá, ${nome}!`;
  } else {
    return 'Olá, mundo!';
  }
}

console.log(saudacao('Maria'));
```

### Fluxo da aplicação

```mermaid
flowchart LR
    subgraph Browser["Browser (TutorialKit)"]
        A["Aluno escreve código\npt-BR no editor"]
        B["programa.jscripto"]
        F["Painel Saída"]
    end

    subgraph WebContainer["WebContainer"]
        C["run.js\n(polling 500ms)"]
        D["transpiler.js\n(Ohm.js)"]
        E["new Function(js)\nexecuta o código"]
    end

    A -->|"salva"| B
    C -->|"detecta mudança"| B
    C -->|"transpile(source)"| D
    D -->|"pt-BR → JS"| E
    E -->|"console.log"| F
```

**Passo a passo:**

1. O aluno edita `programa.jscripto` no editor CodeMirror integrado ao TutorialKit
2. `run.js` roda dentro do WebContainer e detecta mudanças via polling (a cada 500ms)
3. O código pt-BR é passado para `transpile()`, que usa a gramática Ohm.js para gerar JavaScript válido
4. O JavaScript gerado é executado via `new Function()`, e a saída (`console.log`) aparece no painel "Saída"

## Estrutura do projeto

```
javascripto/
├── packages/
│   └── transpiler/             # @javascripto/transpiler
│       ├── src/
│       │   ├── index.js        # API: transpile() + semânticas toJS()
│       │   └── javascripto.ohm # Gramática Ohm.js (fonte canônica)
│       └── tests/
│           ├── transpile.test.js  # Testes unitários
│           └── template.test.js   # Testes de integração (lições + template)
├── tutorial/                   # App Astro + TutorialKit
│   ├── src/
│   │   ├── templates/default/  # Template do runner (WebContainer)
│   │   │   ├── run.js          # Polling + execução
│   │   │   ├── transpiler.js   # Cópia standalone do transpilador
│   │   │   └── javascripto.ohm # Cópia da gramática
│   │   └── content/tutorial/   # Conteúdo das lições
│   │       ├── 1-fundamentos/
│   │       │   ├── 1-primeiros-passos/  # Olá Mundo, Variáveis, Tipos
│   │       │   ├── 2-logica/            # Condições, Atribuição composta, Laços,
│   │       │   │                        # Funções, Controlando laços, Escolha, Ternário
│   │       │   └── 3-erros/             # Tente/capture, Lance, Finalmente
│   │       ├── 2-estruturas-de-dados/
│   │       │   ├── 1-listas/            # Criando, Modificando, Percorrendo, Métodos
│   │       │   └── 2-objetos/           # Criando, Modificando, Objetos e listas
│   │       └── 3-javascript-moderno/
│   │           ├── 1-classes/           # Criando, Métodos, Classes e listas
│   │           ├── 2-promessas/         # Funções assíncronas, Sequência, Erros
│   │           ├── 3-closures/          # O que é, Funções que retornam funções, Estado privado
│   │           ├── 4-sintaxe-moderna/   # Funções flecha, Desestruturação,
│   │           │                        # Espalhamento, Template strings
│   │           └── 5-modulos/           # Exportando, Importando, Export default
│   ├── components/
│   │   └── Playground/             # Editor livre (React)
│   │       ├── index.tsx           # Componente raiz
│   │       ├── JscriptoEditor.tsx  # Editor CodeMirror pt-BR
│   │       ├── JsOutputPanel.tsx   # Painel JS transpilado
│   │       ├── TerminalPanel.tsx   # Terminal xterm + BootScreen
│   │       ├── BootScreen.tsx      # Overlay de loading do WebContainer
│   │       ├── FileTree.tsx        # Árvore de arquivos
│   │       └── TemplateSelector.tsx
│   └── pages/
│       └── playground.astro        # Rota /playground
├── ideia/
│   └── decisoes.md             # Registro de decisões técnicas
└── package.json                # Scripts: dev, build, test, deploy
```

> O transpilador existe em duas cópias: a canônica em `packages/transpiler/` (usada para testes) e uma standalone em `tutorial/src/templates/default/` (que roda no WebContainer). Os testes de integração garantem que ambas ficam sincronizadas automaticamente.

## Mapeamento pt-BR → JavaScript

### Palavras-chave

| pt-BR | JavaScript | Categoria |
|---|---|---|
| `deixe` | `let` | Declaração |
| `fixe` | `const` | Declaração |
| `funcao` | `function` | Declaração |
| `retorne` | `return` | Controle |
| `se` | `if` | Condicional |
| `senao` | `else` | Condicional |
| `enquanto` | `while` | Laço |
| `para` | `for` | Laço |
| `quebre` | `break` | Controle de laço |
| `continue` | `continue` | Controle de laço |
| `escolha` | `switch` | Seleção |
| `caso` | `case` | Seleção |
| `padrao` | `default` | Seleção |
| `tente` | `try` | Erros |
| `capture` | `catch` | Erros |
| `finalmente` | `finally` | Erros |
| `lance` | `throw` | Erros |
| `classe` | `class` | Classe |
| `construtor` | `constructor` | Classe |
| `novo` | `new` | Instância |
| `isso` | `this` | Referência |
| `assincrono` | `async` | Assíncrono |
| `aguarde` | `await` | Assíncrono |
| `importe` | `import` | Módulos |
| `exporte` | `export` | Módulos |
| `de` | `from` | Módulos |
| `como` | `as` | Módulos |
| `verdadeiro` | `true` | Literal |
| `falso` | `false` | Literal |
| `nulo` | `null` | Literal |
| `imprima` | `console.log` | Saída |

### Métodos de lista

| pt-BR | JavaScript |
|---|---|
| `.tamanho` | `.length` |
| `.adicione()` | `.push()` |
| `.remova()` | `.pop()` |
| `.mapa()` | `.map()` |
| `.filtre()` | `.filter()` |
| `.paraCada()` | `.forEach()` |
| `.reduza()` | `.reduce()` |
| `.encontre()` | `.find()` |
| `.inclui()` | `.includes()` |

### Funcionalidades modernas

| Funcionalidade | Sintaxe |
|---|---|
| Funções flecha | `x => x * 2`, `(a, b) => a + b` |
| Desestruturação de objeto | `deixe {nome, idade} = pessoa` |
| Desestruturação de lista | `deixe [a, b] = lista` |
| Espalhamento em lista | `[...lista, 4, 5]` |
| Espalhamento em objeto | `{...objeto, chave: valor}` |
| Template strings | `` `Olá, ${nome}!` `` |

> Keywords não usam acentos nem cedilha (`funcao` em vez de `função`) para facilitar a digitação.

## Stack

- **[TutorialKit](https://tutorialkit.dev/)** — plataforma de tutoriais interativos (Astro + WebContainer)
- **[Ohm.js](https://ohmjs.org/)** — gramática formal para o transpilador pt-BR → JS
- **CodeMirror 6** — editor com syntax highlighting para a sintaxe pt-BR

## Rodando localmente

```bash
# Instalar dependências
pnpm install

# Rodar o tutorial em modo dev
pnpm dev

# Rodar os testes do transpilador
pnpm test
```

## Contribuindo

O projeto está em desenvolvimento ativo. Veja `ideia/decisoes.md` para entender as decisões técnicas tomadas até agora.

## Licença

A definir.
