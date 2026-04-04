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
});
