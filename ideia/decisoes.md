# Decisões de projeto

Registro das decisões técnicas e de design do JavaScripto.

---

## 1. Transpilador: Ohm.js

**Decisão:** usar [Ohm.js](https://ohmjs.org/) para definir a gramática pt-BR e transpilar para JavaScript.

**Opções avaliadas:**

| Opção | Prós | Contras |
|---|---|---|
| Regex/substituição de tokens | Simples, zero dependências | Quebra em strings, comentários, substrings (`resultado` contém `se`). Não reporta erros com posição. |
| Babel com plugin customizado | Robusto, ecossistema maduro | Babel parseia JS válido — `se (x)` não é JS, então o parser quebra antes do plugin agir. Pesado (~2MB+). |
| **Ohm.js (escolhido)** | Gramática declarativa, erros com posição, leve (~150KB), roda no browser | Curva de aprendizado da lib; precisa definir a gramática completa |

**Motivo principal:** com Ohm.js, uma única gramática serve para três propósitos — transpilação, syntax highlighting no editor, e autocomplete contextual. Além disso, permite gerar mensagens de erro em português com a posição exata no código.

---

## 2. Editor: CodeMirror 6 (via TutorialKit)

**Decisão:** usar o CodeMirror 6 que já vem integrado ao TutorialKit, em vez de substituir por Monaco.

**Opções avaliadas:**

| Opção | Prós | Contras |
|---|---|---|
| Monaco (customizado) | IntelliSense rico, TypeScript language service embutido | Pesado (~2-3MB), requer reescrever o editor do TutorialKit |
| **CodeMirror 6 (escolhido)** | Já integrado ao TutorialKit, leve (~200KB), extensível | IntelliSense precisa ser montado via extensões |

**Motivo principal:** para uma plataforma de **ensino** com passos guiados, CodeMirror 6 é suficiente. O IntelliSense pesado do Monaco seria excesso para quem está aprendendo `se`/`senao`. Sugestões de keywords pt-BR + erros em português já entregam uma ótima experiência.

**Integração planejada:**

```
Ohm.js (gramática) ──→ transpilador (código pt-BR → JS)
        │
        ├──→ tokenizer para CodeMirror 6 (syntax highlighting)
        ├──→ autocomplete contextual (keywords pt-BR)
        └──→ diagnósticos em pt-BR (erros de sintaxe)
```

---

## 3. Idioma do código e documentação

**Decisão:**

- Documentação e comentários no código: **português brasileiro**
- Identificadores (variáveis, funções, arquivos, pastas): **inglês**

Isso mantém o projeto acessível para brasileiros enquanto segue convenções padrão de código.

---

## 4. Sintaxe sem acentuação

**Decisão:** keywords pt-BR **não usam acentos nem cedilha**. `funcao` em vez de `função`, `senao` em vez de `senão`.

**Motivo:** reduz atrito na digitação. O aluno não precisa se preocupar com acentuação ao escrever código. Teclados internacionais e atalhos de IDE funcionam sem conflito.

---

## 5. Mapeamento de sintaxe pt-BR → JavaScript

### Keywords implementadas

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
| `verdadeiro` | `true` | Literal |
| `falso` | `false` | Literal |
| `nulo` | `null` | Literal |
| `imprima` | `console.log` | Saída |

### Métodos de lista implementados

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

### Funcionalidades além de keywords

| Funcionalidade | Sintaxe |
|---|---|
| Funções flecha | `x => x * 2`, `(a, b) => a + b` |
| Desestruturação de objeto | `deixe {nome, idade} = pessoa` |
| Desestruturação de lista | `deixe [a, b] = lista` |
| Espalhamento em lista | `[...lista, 4, 5]` |
| Espalhamento em objeto | `{...objeto, chave: valor}` |
| Template strings | `` `Olá, ${nome}!` `` |

### Keywords de módulos implementadas

| pt-BR | JavaScript | Notas |
|---|---|---|
| `importe` | `import` | `importe X de './m'`, `importe { x } de './m'`, `importe * como X de './m'`, `importe './m'` |
| `exporte` | `export` | `exporte funcao/deixe/fixe/classe`, `exporte padrao expr`, `exporte { x }` |
| `de` | `from` | Cláusula de origem no import |
| `como` | `as` | Renomeação (`importe * como X`, `exporte { x como y }`) |

### Keywords a considerar no futuro

| pt-BR | JavaScript | Notas |
|---|---|---|
| `tipo_de` | `typeof` | Operador |
| `instancia_de` | `instanceof` | Operador |
| `indefinido` | `undefined` | Literal |

---

## 6. Currículo

### Parte 1 — Fundamentos (13 lições)

**Capítulo 1 — Primeiros passos:** Olá Mundo, Variáveis e valores, Tipos de dados

**Capítulo 2 — Lógica:** Condicionais, Atribuição composta, Laços, Funções, Controlando laços, Escolha, Ternário

**Capítulo 3 — Erros:** Tente e capture, Lance, Finalmente

### Parte 2 — Estruturas de dados (7 lições)

**Capítulo 1 — Listas:** Criando listas, Modificando listas, Percorrendo listas, Métodos de lista

**Capítulo 2 — Objetos:** Criando objetos, Modificando objetos, Objetos e listas

### Parte 3 — JavaScript moderno (10 lições)

**Capítulo 1 — Classes:** Criando classes, Métodos, Classes e listas

**Capítulo 2 — Promessas:** Funções assíncronas, Aguardando em sequência, Erros assíncronos

**Capítulo 3 — Closures:** O que é closure, Funções que retornam funções, Estado privado

**Capítulo 4 — Sintaxe moderna:** Funções flecha, Desestruturação, Espalhamento, Template strings

**Capítulo 5 — Módulos:** Exportando, Importando, Export default

Total: 33 lições

---

## 7. Decisões técnicas do transpilador

### Ordenação de keywords no PEG

Em gramáticas PEG (como Ohm.js), alternativas são tentadas em ordem e a primeira que combinar vence — sem backtracking. Isso cria um problema quando uma keyword é prefixo de outra.

**Exemplo:** `"se" | "senao"`. Ao tentar fazer o match de `senao`, o parser tenta `"se"` primeiro, combina os dois primeiros caracteres, mas então `~identPart` falha porque `n` segue. O parser já commitou com `"se"` e não tenta `"senao"`. Resultado: `senao` escapa da guarda de keyword e pode ser usado como identificador.

**Regra:** sempre colocar a keyword mais longa antes da mais curta. `"senao"` deve vir antes de `"se"`.

### Template strings: abordagem de dois passes

Template strings (`` `Olá, ${nome}!` ``) apresentam um problema em Ohm.js: as partes de texto devem ser capturadas lexicamente (sem pular espaços), mas as expressões dentro de `${}` precisam de uma regra sintática (`Expression`) — e regras lexicais não podem chamar regras sintáticas.

**Solução adotada:** dois passes.
1. A gramática captura tudo dentro de `${}` como texto bruto via regra lexical (`templateExpr = (~"}" any)*`)
2. Na semântica, o texto bruto é re-parseado com `grammar.match(src, 'Expression')` e transpilado normalmente

Isso permite que keywords pt-BR dentro de interpolações (ex: `${verdadeiro}`) sejam corretamente traduzidas para `${true}`.

**Limitação conhecida:** expressões com `}` literal dentro de strings (ex: `${ obj.metodo("}") }`) quebram o parser da interpolação. Aceitável para o escopo do projeto.

---

## 8. Versões

O JavaScripto está planejado em três versões:

### v1 — Tutorial interativo (atual)

Tutorial guiado usando TutorialKit com lições passo a passo. O aluno segue um currículo estruturado, escrevendo código em pt-BR diretamente no browser com feedback instantâneo.

**Status:** em desenvolvimento ativo (30 lições implementadas)

### v2 — Landing page

Site institucional para apresentar o projeto, explicar a proposta e direcionar visitantes ao tutorial ou playground. Serve como porta de entrada para quem ainda não conhece o JavaScripto.

**Escopo planejado:**
- Explicação visual de como funciona (antes/depois do transpilador)
- Exemplos interativos inline
- Links para o tutorial e playground
- Seção de contribuição e comunidade

### v3 — Playground

Ambiente livre para escrever e executar código pt-BR sem seguir um currículo. Funciona como um REPL no browser — o aluno escreve, transpila e vê o resultado instantaneamente.

**Status:** implementado em `/playground`

**Implementado:**
- Editor CodeMirror com syntax highlighting e autocomplete pt-BR
- Painel lado a lado: código pt-BR → JavaScript transpilado → saída
- Terminal xterm com execução real via WebContainer
- BootScreen animada durante boot/instalação do WebContainer (inspirada no TutorialKit)
- Árvore de arquivos com criação e remoção de arquivos
- Templates de exemplos prontos (seletor no header do editor)
- Tema claro/escuro sincronizado com o tutorial

**Pendente:**
- Compartilhamento de código via URL
