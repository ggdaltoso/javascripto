import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as ohm from 'ohm-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const grammarSource = readFileSync(join(__dirname, 'javascripto.ohm'), 'utf-8');
const grammar = ohm.grammar(grammarSource);
const semantics = grammar.createSemantics();

// Mapa de tradução: propriedades/métodos pt-BR → JavaScript
const methodMap = {
  tamanho: 'length',
  adicione: 'push',
  remova: 'pop',
};

semantics.addOperation('toJS()', {
  Program(statements) {
    return statements.children.map(s => s.toJS()).join('\n');
  },

  VariableDeclaration(kind, name, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return `${jsKind} ${name.toJS()} = ${expr.toJS()};`;
  },

  ExpressionStatement(expr, _semi) {
    return `${expr.toJS()};`;
  },

  IfStatement(_se, _lp, cond, _rp, block, _senao, elseBlock) {
    let js = `if (${cond.toJS()}) ${block.toJS()}`;
    if (elseBlock.children.length > 0) {
      js += ` else ${elseBlock.children[0].toJS()}`;
    }
    return js;
  },

  WhileStatement(_enquanto, _lp, cond, _rp, block) {
    return `while (${cond.toJS()}) ${block.toJS()}`;
  },

  ForStatement(_para, _lp, init, _s1, cond, _s2, update, _rp, block) {
    return `for (${init.toJS()}; ${cond.toJS()}; ${update.toJS()}) ${block.toJS()}`;
  },

  ForInit_varDecl(kind, name, _eq, expr) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return `${jsKind} ${name.toJS()} = ${expr.toJS()}`;
  },

  ForInit_assign(expr) {
    return expr.toJS();
  },

  ForUpdate(expr) {
    return expr.toJS();
  },

  FunctionDeclaration(_funcao, name, _lp, params, _rp, block) {
    return `function ${name.toJS()}(${params.toJS()}) ${block.toJS()}`;
  },

  Params(list) {
    return list
      .asIteration()
      .children.map((p) => p.toJS())
      .join(', ');
  },

  ReturnStatement(_retorne, expr, _semi) {
    if (expr.children.length > 0) {
      return `return ${expr.children[0].toJS()};`;
    }
    return 'return;';
  },

  Block(_lb, statements, _rb) {
    const body = statements.children.map((s) => s.toJS()).join('\n');
    return `{\n${body}\n}`;
  },

  EmptyStatement(_semi) {
    return ';';
  },

  AssignmentExpression_assign(lhs, _eq, expr) {
    return `${lhs.toJS()} = ${expr.toJS()}`;
  },

  LogicalOrExpression_or(left, _op, right) {
    return `${left.toJS()} || ${right.toJS()}`;
  },

  LogicalAndExpression_and(left, _op, right) {
    return `${left.toJS()} && ${right.toJS()}`;
  },

  EqualityExpression_eq(left, _op, right) {
    return `${left.toJS()} === ${right.toJS()}`;
  },

  EqualityExpression_neq(left, _op, right) {
    return `${left.toJS()} !== ${right.toJS()}`;
  },

  EqualityExpression_looseEq(left, _op, right) {
    return `${left.toJS()} == ${right.toJS()}`;
  },

  EqualityExpression_looseNeq(left, _op, right) {
    return `${left.toJS()} != ${right.toJS()}`;
  },

  ComparisonExpression_lte(left, _op, right) {
    return `${left.toJS()} <= ${right.toJS()}`;
  },

  ComparisonExpression_gte(left, _op, right) {
    return `${left.toJS()} >= ${right.toJS()}`;
  },

  ComparisonExpression_lt(left, _op, right) {
    return `${left.toJS()} < ${right.toJS()}`;
  },

  ComparisonExpression_gt(left, _op, right) {
    return `${left.toJS()} > ${right.toJS()}`;
  },

  AddExpression_add(left, _op, right) {
    return `${left.toJS()} + ${right.toJS()}`;
  },

  AddExpression_sub(left, _op, right) {
    return `${left.toJS()} - ${right.toJS()}`;
  },

  MulExpression_mul(left, _op, right) {
    return `${left.toJS()} * ${right.toJS()}`;
  },

  MulExpression_div(left, _op, right) {
    return `${left.toJS()} / ${right.toJS()}`;
  },

  MulExpression_mod(left, _op, right) {
    return `${left.toJS()} % ${right.toJS()}`;
  },

  UnaryExpression_not(_op, expr) {
    return `!${expr.toJS()}`;
  },

  UnaryExpression_neg(_op, expr) {
    return `-${expr.toJS()}`;
  },

  CallExpression_call(callee, _lp, args, _rp) {
    return `${callee.toJS()}(${args.toJS()})`;
  },

  CallExpression_member(obj, _dot, prop) {
    const propName = prop.sourceString;
    const translated = methodMap[propName] || propName;
    return `${obj.toJS()}.${translated}`;
  },

  CallExpression_index(obj, _lb, expr, _rb) {
    return `${obj.toJS()}[${expr.toJS()}]`;
  },

  Arguments(list) {
    return list
      .asIteration()
      .children.map((a) => a.toJS())
      .join(', ');
  },

  PrimaryExpression_paren(_lp, expr, _rp) {
    return `(${expr.toJS()})`;
  },

  PrimaryExpression_true(_) {
    return 'true';
  },

  PrimaryExpression_false(_) {
    return 'false';
  },

  PrimaryExpression_null(_) {
    return 'null';
  },

  PrimaryExpression_object(node) {
    return node.toJS();
  },

  PrimaryExpression_array(node) {
    return node.toJS();
  },

  PrimaryExpression_string(node) {
    return node.toJS();
  },

  PrimaryExpression_number(node) {
    return node.toJS();
  },

  PrimaryExpression_imprima(_) {
    return 'console.log';
  },

  PrimaryExpression_ident(node) {
    return node.toJS();
  },

  stringLiteral(_open, chars, _close) {
    return `"${chars.sourceString}"`;
  },

  ArrayLiteral(_lb, elements, _rb) {
    const items = elements.asIteration().children.map((e) => e.toJS()).join(', ');
    return `[${items}]`;
  },

  ObjectLiteral(_lb, props, _rb) {
    const items = props.asIteration().children.map((p) => p.toJS()).join(', ');
    return `{${items}}`;
  },

  PropertyDef(key, _colon, value) {
    return `${key.toJS()}: ${value.toJS()}`;
  },

  numberLiteral(_intPart, _dot, _decPart) {
    return this.sourceString;
  },

  identifier(_start, _rest) {
    return this.sourceString;
  },

  _terminal() {
    return this.sourceString;
  },
});

export function transpile(source) {
  const matchResult = grammar.match(source);

  if (matchResult.failed()) {
    throw new Error(`Erro de sintaxe: ${matchResult.shortMessage}`);
  }

  return semantics(matchResult).toJS();
}
