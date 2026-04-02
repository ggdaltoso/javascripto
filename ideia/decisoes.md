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

Tabela base de keywords. Será expandida conforme o currículo avançar.

| pt-BR | JavaScript | Categoria |
|---|---|---|
| `funcao` | `function` | Declaração |
| `retorne` | `return` | Controle de fluxo |
| `se` | `if` | Condicional |
| `senao` | `else` | Condicional |
| `enquanto` | `while` | Laço |
| `para` | `for` | Laço |
| `verdadeiro` | `true` | Literal |
| `falso` | `false` | Literal |
| `nulo` | `null` | Literal |
| `deixe` | `let` | Declaração |
| `const` | `const` | Declaração |
| `imprima` | `console.log` | Saída |
| `tente` | `try` | Erro |
| `capture` | `catch` | Erro |
| `classe` | `class` | OOP |
| `novo` | `new` | OOP |
| `isso` | `this` | OOP |

### Keywords a considerar no futuro

| pt-BR | JavaScript | Notas |
|---|---|---|
| `indefinido` | `undefined` | Literal |
| `quebre` | `break` | Controle de laço |
| `continue` | `continue` | Igual em pt-BR? Ou `prossiga`? |
| `caso` | `case` | Switch |
| `escolha` | `switch` | Switch |
| `padrao` | `default` | Switch |
| `de` | `of` | `para...de` → `for...of` |
| `em` | `in` | `para...em` → `for...in` |
| `assincrona` | `async` | Assíncrono |
| `espere` | `await` | Assíncrono |
| `exporte` | `export` | Módulos |
| `importe` | `import` | Módulos |
| `lance` | `throw` | Erro |
| `finalmente` | `finally` | Erro |
| `tipo_de` | `typeof` | Operador |
| `instancia_de` | `instanceof` | Operador |

---

## 5. Currículo

### Parte 1 — Fundamentos

**Capítulo 1 — Primeiros passos**
- Lição 1: Olá, Mundo!
- Lição 2: Variáveis e valores
- Lição 3: Tipos de dados

**Capítulo 2 — Lógica**
- Lição 1: Condicionais (`se`/`senao`)
- Lição 2: Laços (`enquanto`/`para`)
- Lição 3: Funções

### Parte 2 — Estruturas de dados

**Capítulo 1 — Listas**

**Capítulo 2 — Objetos**

### Parte 3 — JavaScript moderno

**Capítulo 1 — Promessas e assíncrono**

**Capítulo 2 — Classes**

> O currículo será detalhado lição a lição conforme a implementação avançar.
