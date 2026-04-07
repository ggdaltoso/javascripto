import { describe, it, expect } from 'vitest';
import { transpile } from '../src/index.js';

describe('transpile', () => {
  describe('imprima (console.log)', () => {
    it('transpila imprima com string', () => {
      expect(transpile('imprima("Olá, mundo!")')).toBe('console.log("Olá, mundo!");');
    });

    it('transpila imprima com número', () => {
      expect(transpile('imprima(42)')).toBe('console.log(42);');
    });

    it('transpila imprima com variável', () => {
      expect(transpile('imprima(nome)')).toBe('console.log(nome);');
    });

    it('transpila imprima com múltiplos argumentos', () => {
      expect(transpile('imprima("Nome:", nome)')).toBe('console.log("Nome:", nome);');
    });
  });

  describe('declaração de variáveis', () => {
    it('transpila deixe para let', () => {
      expect(transpile('deixe x = 10')).toBe('let x = 10;');
    });

    it('transpila fixe para const', () => {
      expect(transpile('fixe pi = 3.14')).toBe('const pi = 3.14;');
    });

    it('transpila deixe com string', () => {
      expect(transpile('deixe nome = "Maria"')).toBe('let nome = "Maria";');
    });

    it('transpila deixe com expressão', () => {
      expect(transpile('deixe soma = 1 + 2')).toBe('let soma = 1 + 2;');
    });
  });

  describe('literais booleanos e nulo', () => {
    it('transpila verdadeiro para true', () => {
      expect(transpile('deixe ativo = verdadeiro')).toBe('let ativo = true;');
    });

    it('transpila falso para false', () => {
      expect(transpile('deixe parado = falso')).toBe('let parado = false;');
    });

    it('transpila nulo para null', () => {
      expect(transpile('deixe vazio = nulo')).toBe('let vazio = null;');
    });
  });

  describe('expressões aritméticas', () => {
    it('transpila soma', () => {
      expect(transpile('imprima(1 + 2)')).toBe('console.log(1 + 2);');
    });

    it('transpila multiplicação', () => {
      expect(transpile('imprima(3 * 4)')).toBe('console.log(3 * 4);');
    });

    it('transpila expressão com parênteses', () => {
      expect(transpile('imprima((1 + 2) * 3)')).toBe('console.log((1 + 2) * 3);');
    });
  });

  describe('atribuição composta', () => {
    it('transpila += ', () => {
      expect(transpile('soma += 5')).toBe('soma += 5;');
    });

    it('transpila -= ', () => {
      expect(transpile('saldo -= 10')).toBe('saldo -= 10;');
    });

    it('transpila *= ', () => {
      expect(transpile('preco *= 2')).toBe('preco *= 2;');
    });

    it('transpila /= ', () => {
      expect(transpile('valor /= 3')).toBe('valor /= 3;');
    });

    it('transpila += em laço', () => {
      const input = `deixe soma = 0
para (deixe i = 1; i <= 5; i += 1) {
  soma += i
}`;
      const result = transpile(input);
      expect(result).toContain('i += 1');
      expect(result).toContain('soma += i');
    });
  });

  describe('operador ternário', () => {
    it('transpila ternário simples', () => {
      expect(transpile('deixe x = verdadeiro ? 1 : 2')).toBe('let x = true ? 1 : 2;');
    });

    it('transpila ternário com expressões', () => {
      expect(transpile('deixe r = 10 > 5 ? "maior" : "menor"')).toBe('let r = 10 > 5 ? "maior" : "menor";');
    });

    it('transpila ternário aninhado', () => {
      const input = 'deixe s = x > 0 ? "positivo" : x === 0 ? "zero" : "negativo"';
      const result = transpile(input);
      expect(result).toContain('? "positivo"');
      expect(result).toContain('? "zero"');
      expect(result).toContain(': "negativo"');
    });

    it('transpila ternário em imprima', () => {
      expect(transpile('imprima(ativo ? "sim" : "nao")')).toBe('console.log(ativo ? "sim" : "nao");');
    });
  });

  describe('condicional (se/senao)', () => {
    it('transpila se para if', () => {
      const input = 'se (verdadeiro) { imprima("sim") }';
      const expected = 'if (true) {\nconsole.log("sim");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila se/senao para if/else', () => {
      const input = 'se (falso) { imprima("a") } senao { imprima("b") }';
      const expected = 'if (false) {\nconsole.log("a");\n} else {\nconsole.log("b");\n}';
      expect(transpile(input)).toBe(expected);
    });
  });

  describe('laços', () => {
    it('transpila enquanto para while', () => {
      const input = 'enquanto (verdadeiro) { imprima("loop") }';
      const expected = 'while (true) {\nconsole.log("loop");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila para para for', () => {
      const input = 'para (deixe i = 0; i < 10; i = i + 1) { imprima(i) }';
      const expected = 'for (let i = 0; i < 10; i = i + 1) {\nconsole.log(i);\n}';
      expect(transpile(input)).toBe(expected);
    });
  });

  describe('funções', () => {
    it('transpila funcao para function', () => {
      const input = 'funcao saudacao() { imprima("Oi!") }';
      const expected = 'function saudacao() {\nconsole.log("Oi!");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila funcao com parâmetros', () => {
      const input = 'funcao soma(a, b) { retorne a + b }';
      const expected = 'function soma(a, b) {\nreturn a + b;\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila retorne sem valor', () => {
      const input = 'funcao nada() { retorne }';
      const expected = 'function nada() {\nreturn;\n}';
      expect(transpile(input)).toBe(expected);
    });
  });

  describe('operadores de comparação e lógicos', () => {
    it('transpila igualdade estrita', () => {
      expect(transpile('imprima(1 === 1)')).toBe('console.log(1 === 1);');
    });

    it('transpila operadores lógicos', () => {
      expect(transpile('imprima(verdadeiro && falso)')).toBe('console.log(true && false);');
    });

    it('transpila negação', () => {
      expect(transpile('imprima(!falso)')).toBe('console.log(!false);');
    });
  });

  describe('concatenação de strings', () => {
    it('transpila concatenação com +', () => {
      expect(transpile('imprima("Olá, " + nome + "!")')).toBe('console.log("Olá, " + nome + "!");');
    });
  });

  describe('programa completo', () => {
    it('transpila exemplo do README', () => {
      const input = `funcao saudacao(nome) {
  se (nome) {
    retorne "Olá, " + nome + "!"
  } senao {
    retorne "Olá, mundo!"
  }
}

imprima(saudacao("Maria"))`;

      const result = transpile(input);
      expect(result).toContain('function saudacao(nome)');
      expect(result).toContain('if (nome)');
      expect(result).toContain('return "Olá, " + nome + "!"');
      expect(result).toContain('} else {');
      expect(result).toContain('return "Olá, mundo!"');
      expect(result).toContain('console.log(saudacao("Maria"))');
    });
  });

  describe('erros de sintaxe', () => {
    it('lança erro em código inválido', () => {
      expect(() => transpile('@@@@')).toThrow('Erro de sintaxe');
    });

    it('erro tem nome ErroSintaxe', () => {
      try {
        transpile('@@@@');
      } catch (e) {
        expect(e.name).toBe('ErroSintaxe');
      }
    });
  });

  describe('comentários', () => {
    it('ignora comentários de linha', () => {
      const input = '// isto é um comentário\nimprima("oi")';
      expect(transpile(input)).toBe('console.log("oi");');
    });

    it('ignora comentários de bloco', () => {
      const input = '/* comentário */ imprima("oi")';
      expect(transpile(input)).toBe('console.log("oi");');
    });
  });

  describe('listas (arrays)', () => {
    it('transpila array vazio', () => {
      expect(transpile('deixe lista = []')).toBe('let lista = [];');
    });

    it('transpila array com elementos', () => {
      expect(transpile('deixe nums = [1, 2, 3]')).toBe('let nums = [1, 2, 3];');
    });

    it('transpila array com strings', () => {
      expect(transpile('deixe frutas = ["maça", "banana", "uva"]')).toBe('let frutas = ["maça", "banana", "uva"];');
    });

    it('transpila acesso por índice', () => {
      expect(transpile('imprima(lista[0])')).toBe('console.log(lista[0]);');
    });

    it('transpila chamada de método em array', () => {
      expect(transpile('lista.adicione(4)')).toBe('lista.push(4);');
    });

    it('transpila acesso a tamanho', () => {
      expect(transpile('imprima(lista.tamanho)')).toBe('console.log(lista.length);');
    });

    it('transpila remova', () => {
      expect(transpile('lista.remova()')).toBe('lista.pop();');
    });
  });

  describe('tradução de métodos pt-BR', () => {
    it('traduz .tamanho para .length', () => {
      expect(transpile('imprima(lista.tamanho)')).toBe('console.log(lista.length);');
    });

    it('traduz .adicione() para .push()', () => {
      expect(transpile('lista.adicione("x")')).toBe('lista.push("x");');
    });

    it('traduz .remova() para .pop()', () => {
      expect(transpile('deixe ultimo = lista.remova()')).toBe('let ultimo = lista.pop();');
    });

    it('mantém propriedade não-mapeada como está', () => {
      expect(transpile('imprima(obj.nome)')).toBe('console.log(obj.nome);');
    });
  });

  describe('objetos', () => {
    it('transpila objeto vazio', () => {
      expect(transpile('deixe obj = {}')).toBe('let obj = {};');
    });

    it('transpila objeto com propriedades', () => {
      expect(transpile('deixe pessoa = { nome: "Ana", idade: 25 }')).toBe('let pessoa = {nome: "Ana", idade: 25};');
    });

    it('transpila acesso por ponto', () => {
      expect(transpile('imprima(pessoa.nome)')).toBe('console.log(pessoa.nome);');
    });

    it('transpila acesso por colchete com string', () => {
      expect(transpile('imprima(pessoa["nome"])')).toBe('console.log(pessoa["nome"]);');
    });

    it('transpila objeto com chave string', () => {
      expect(transpile('deixe cfg = { "chave": 1 }')).toBe('let cfg = {"chave": 1};');
    });
  });

  describe('classes (classe/novo/isso)', () => {
    it('transpila classe vazia', () => {
      const input = 'classe Animal {}';
      const expected = 'class Animal {\n\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila classe com construtor', () => {
      const input = 'classe Animal { construtor(nome) { isso.nome = nome } }';
      const result = transpile(input);
      expect(result).toContain('class Animal');
      expect(result).toContain('constructor(nome)');
      expect(result).toContain('this.nome = nome;');
    });

    it('transpila classe com metodo', () => {
      const input = 'classe Animal { falar() { imprima("oi") } }';
      const result = transpile(input);
      expect(result).toContain('class Animal');
      expect(result).toContain('falar()');
      expect(result).toContain('console.log("oi");');
    });

    it('transpila novo para new', () => {
      expect(transpile('deixe a = novo Animal("Gato")')).toBe('let a = new Animal("Gato");');
    });

    it('transpila isso para this', () => {
      expect(transpile('isso.nome = "Rex"')).toBe('this.nome = "Rex";');
    });

    it('transpila isso com acesso a propriedade', () => {
      expect(transpile('imprima(isso.nome)')).toBe('console.log(this.nome);');
    });

    it('transpila classe completa', () => {
      const input = `classe Animal {
  construtor(nome) {
    isso.nome = nome
  }
  falar() {
    imprima(isso.nome + " faz um barulho.")
  }
}
deixe a = novo Animal("Gato")
a.falar()`;
      const result = transpile(input);
      expect(result).toContain('class Animal');
      expect(result).toContain('constructor(nome)');
      expect(result).toContain('this.nome = nome;');
      expect(result).toContain('falar()');
      expect(result).toContain('new Animal("Gato")');
      expect(result).toContain('a.falar()');
    });
  });

  describe('quebre e continue', () => {
    it('transpila quebre para break', () => {
      const input = 'enquanto (verdadeiro) { quebre }';
      const expected = 'while (true) {\nbreak;\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila continue para continue', () => {
      const input = 'enquanto (verdadeiro) { continue }';
      const expected = 'while (true) {\ncontinue;\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila quebre dentro de para', () => {
      const input = 'para (deixe i = 0; i < 10; i = i + 1) { se (i === 5) { quebre } }';
      const expected = 'for (let i = 0; i < 10; i = i + 1) {\nif (i === 5) {\nbreak;\n}\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila continue dentro de para', () => {
      const input = 'para (deixe i = 0; i < 5; i = i + 1) { se (i === 2) { continue } imprima(i) }';
      const expected = 'for (let i = 0; i < 5; i = i + 1) {\nif (i === 2) {\ncontinue;\n}\nconsole.log(i);\n}';
      expect(transpile(input)).toBe(expected);
    });
  });

  describe('escolha/caso/padrao (switch)', () => {
    it('transpila escolha com um caso', () => {
      const input = 'escolha (x) { caso 1: imprima("um") quebre }';
      const expected = 'switch (x) {\ncase 1:\nconsole.log("um");\nbreak;\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila escolha com múltiplos casos', () => {
      const input = 'escolha (x) { caso 1: imprima("um") quebre caso 2: imprima("dois") quebre }';
      const expected = 'switch (x) {\ncase 1:\nconsole.log("um");\nbreak;\ncase 2:\nconsole.log("dois");\nbreak;\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila escolha com padrao', () => {
      const input = 'escolha (x) { caso 1: imprima("um") quebre padrao: imprima("outro") }';
      const expected = 'switch (x) {\ncase 1:\nconsole.log("um");\nbreak;\ndefault:\nconsole.log("outro");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila escolha com string', () => {
      const input = 'escolha (cor) { caso "azul": imprima("céu") quebre padrao: imprima("desconhecido") }';
      const expected = 'switch (cor) {\ncase "azul":\nconsole.log("céu");\nbreak;\ndefault:\nconsole.log("desconhecido");\n}';
      expect(transpile(input)).toBe(expected);
    });
  });

  describe('tratamento de erros (tente/capture/finalmente/lance)', () => {
    it('transpila tente/capture', () => {
      const input = 'tente { imprima("ok") } capture (e) { imprima(e) }';
      const expected = 'try {\nconsole.log("ok");\n} catch (e) {\nconsole.log(e);\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila tente/capture/finalmente', () => {
      const input = 'tente { imprima("ok") } capture (e) { imprima(e) } finalmente { imprima("fim") }';
      const expected = 'try {\nconsole.log("ok");\n} catch (e) {\nconsole.log(e);\n} finally {\nconsole.log("fim");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila tente/finalmente sem capture', () => {
      const input = 'tente { imprima("ok") } finalmente { imprima("fim") }';
      const expected = 'try {\nconsole.log("ok");\n} finally {\nconsole.log("fim");\n}';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila lance com novo Erro', () => {
      const input = 'lance novo Erro("algo errado")';
      const expected = 'throw new Error("algo errado");';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila lance com string', () => {
      const input = 'lance "erro customizado"';
      const expected = 'throw "erro customizado";';
      expect(transpile(input)).toBe(expected);
    });

    it('traduz erro.mensagem para error.message', () => {
      const input = 'imprima(e.mensagem)';
      const expected = 'console.log(e.message);';
      expect(transpile(input)).toBe(expected);
    });

    it('traduz Erro para Error', () => {
      const input = 'deixe err = novo Erro("falha")';
      const expected = 'let err = new Error("falha");';
      expect(transpile(input)).toBe(expected);
    });

    it('transpila lance dentro de tente/capture', () => {
      const input = `funcao dividir(a, b) {
  se (b === 0) { lance novo Erro("divisão por zero") }
  retorne a / b
}
tente {
  imprima(dividir(10, 0))
} capture (e) {
  imprima(e.mensagem)
}`;
      const result = transpile(input);
      expect(result).toContain('throw new Error("divisão por zero")');
      expect(result).toContain('catch (e)');
      expect(result).toContain('e.message');
    });
  });

  describe('assincrono e aguarde (async/await)', () => {
    it('transpila assincrono funcao para async function', () => {
      const input = 'assincrono funcao buscar() { retorne 42 }';
      const result = transpile(input);
      expect(result).toContain('async function buscar()');
    });

    it('transpila funcao sincrona normalmente', () => {
      const input = 'funcao somar(a, b) { retorne a + b }';
      expect(transpile(input)).toContain('function somar(a, b)');
      expect(transpile(input)).not.toContain('async');
    });

    it('transpila aguarde para await', () => {
      const input = `assincrono funcao principal() {
  deixe resultado = aguarde buscar()
  imprima(resultado)
}`;
      const result = transpile(input);
      expect(result).toContain('await buscar()');
    });

    it('transpila assincrono com tente/capture', () => {
      const input = `assincrono funcao principal() {
  tente {
    deixe dados = aguarde buscarDados()
    imprima(dados)
  } capture (e) {
    imprima(e.mensagem)
  }
}`;
      const result = transpile(input);
      expect(result).toContain('async function principal()');
      expect(result).toContain('await buscarDados()');
      expect(result).toContain('catch (e)');
    });

    it('transpila metodo assincrono em classe', () => {
      const input = `classe Servico {
  assincrono buscar() {
    retorne "dados"
  }
}`;
      const result = transpile(input);
      expect(result).toContain('async buscar()');
    });

    it('transpila Promessa para Promise', () => {
      expect(transpile('deixe p = Promessa')).toContain('Promise');
    });

    it('transpila programa completo com async/await', () => {
      const input = `assincrono funcao buscarNome() {
  retorne "Maria"
}
assincrono funcao saudar() {
  deixe nome = aguarde buscarNome()
  imprima("Ola, " + nome + "!")
}
saudar()`;
      const result = transpile(input);
      expect(result).toContain('async function buscarNome()');
      expect(result).toContain('async function saudar()');
      expect(result).toContain('await buscarNome()');
      expect(result).toContain('console.log("Ola, " + nome + "!")');
    });
  });

  describe('funções flecha (=>)', () => {
    it('transpila arrow function com um parâmetro sem parênteses', () => {
      expect(transpile('deixe dobrar = x => x * 2')).toBe('let dobrar = x => x * 2;');
    });

    it('transpila arrow function com parênteses e um parâmetro', () => {
      expect(transpile('deixe dobrar = (x) => x * 2')).toBe('let dobrar = (x) => x * 2;');
    });

    it('transpila arrow function sem parâmetros', () => {
      expect(transpile('deixe ola = () => "Olá"')).toBe('let ola = () => "Olá";');
    });

    it('transpila arrow function com múltiplos parâmetros', () => {
      expect(transpile('deixe soma = (a, b) => a + b')).toBe('let soma = (a, b) => a + b;');
    });

    it('transpila arrow function com bloco', () => {
      const input = 'deixe dobrar = (x) => { retorne x * 2 }';
      expect(transpile(input)).toBe('let dobrar = (x) => {\nreturn x * 2;\n};');
    });

    it('transpila arrow function como argumento de método', () => {
      expect(transpile('numeros.filtre(x => x > 0)')).toBe('numeros.filtre(x => x > 0);');
    });

    it('transpila arrow function assíncrona com parênteses', () => {
      expect(transpile('deixe buscar = assincrono (url) => aguarde buscarDados(url)')).toBe(
        'let buscar = async (url) => await buscarDados(url);'
      );
    });

    it('transpila arrow function como valor em objeto', () => {
      expect(transpile('deixe obj = { calcular: (x) => x * 2 }')).toBe(
        'let obj = {calcular: (x) => x * 2};'
      );
    });
  });

  describe('desestruturação', () => {
    it('transpila desestruturação de objeto com deixe', () => {
      expect(transpile('deixe {nome, idade} = pessoa')).toBe('let {nome, idade} = pessoa;');
    });

    it('transpila desestruturação de objeto com fixe', () => {
      expect(transpile('fixe {x, y} = ponto')).toBe('const {x, y} = ponto;');
    });

    it('transpila desestruturação de objeto com um campo', () => {
      expect(transpile('deixe {nome} = usuario')).toBe('let {nome} = usuario;');
    });

    it('transpila desestruturação de array com deixe', () => {
      expect(transpile('deixe [primeiro, segundo] = lista')).toBe('let [primeiro, segundo] = lista;');
    });

    it('transpila desestruturação de array com fixe', () => {
      expect(transpile('fixe [a, b, c] = coordenadas')).toBe('const [a, b, c] = coordenadas;');
    });

    it('transpila desestruturação de objeto em resultado de chamada', () => {
      expect(transpile('deixe {dados} = obterResposta()')).toBe('let {dados} = obterResposta();');
    });
  });

  describe('espalhamento (...)', () => {
    it('transpila spread de array em literal de array', () => {
      expect(transpile('deixe novaLista = [...lista, 4, 5]')).toBe('let novaLista = [...lista, 4, 5];');
    });

    it('transpila spread de dois arrays', () => {
      expect(transpile('deixe c = [...a, ...b]')).toBe('let c = [...a, ...b];');
    });

    it('transpila spread em chamada de função', () => {
      expect(transpile('imprima(...args)')).toBe('console.log(...args);');
    });

    it('transpila spread misto com argumentos normais', () => {
      expect(transpile('chamar(1, ...resto)')).toBe('chamar(1, ...resto);');
    });

    it('transpila spread no início do array', () => {
      expect(transpile('deixe lista = [...base, "extra"]')).toBe('let lista = [...base, "extra"];');
    });
  });
});
