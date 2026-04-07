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
  mensagem: 'message',
  mapa: 'map',
  filtre: 'filter',
  paraCada: 'forEach',
  reduza: 'reduce',
  encontre: 'find',
  inclui: 'includes',
};

// Mapa de tradução: identificadores pt-BR → JavaScript (builtins)
const identifierMap = {
  Erro: 'Error',
  Promessa: 'Promise',
};

semantics.addOperation('toJS()', {
  Program(statements) {
    return statements.children.map(s => s.toJS()).join('\n');
  },

  // Módulos
  ImportStatement_withClause(_importe, clause, _de, path, _semi) {
    const jsPath = path.toJS().replace(/\.jscripto"$/, '.js"');
    return `import ${clause.toJS()} from ${jsPath};`;
  },

  ImportStatement_sideEffect(_importe, path, _semi) {
    return `import ${path.toJS()};`;
  },

  ImportClause_namespace(_star, _como, name) {
    return `* as ${name.toJS()}`;
  },

  ImportClause_named(_lb, specs, _rb) {
    const items = specs.asIteration().children.map(s => s.toJS()).join(', ');
    return `{ ${items} }`;
  },

  ImportClause_default(name) {
    return name.toJS();
  },

  ImportSpecifier_renamed(local, _como, remote) {
    return `${local.toJS()} as ${remote.toJS()}`;
  },

  ImportSpecifier_simple(name) {
    return name.toJS();
  },

  ExportStatement_default(_exporte, _padrao, expr, _semi) {
    return `export default ${expr.toJS()};`;
  },

  ExportStatement_named(_exporte, _lb, specs, _rb, _semi) {
    const items = specs.asIteration().children.map(s => s.toJS()).join(', ');
    return `export { ${items} };`;
  },

  ExportStatement_func(_exporte, decl) {
    return `export ${decl.toJS()}`;
  },

  ExportStatement_var(_exporte, decl) {
    return `export ${decl.toJS()}`;
  },

  ExportStatement_class(_exporte, decl) {
    return `export ${decl.toJS()}`;
  },

  ExportSpecifier_renamed(local, _como, remote) {
    return `${local.toJS()} as ${remote.toJS()}`;
  },

  ExportSpecifier_simple(name) {
    return name.toJS();
  },

  // Declarações de variáveis
  VariableDeclaration_destructObject(kind, pattern, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return `${jsKind} ${pattern.toJS()} = ${expr.toJS()};`;
  },

  VariableDeclaration_destructArray(kind, pattern, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return `${jsKind} ${pattern.toJS()} = ${expr.toJS()};`;
  },

  VariableDeclaration_simple(kind, name, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return `${jsKind} ${name.toJS()} = ${expr.toJS()};`;
  },

  ObjectPattern(_lb, names, _rb) {
    const items = names.asIteration().children.map(n => n.toJS()).join(', ');
    return `{${items}}`;
  },

  ArrayPattern(_lb, names, _rb) {
    const items = names.asIteration().children.map(n => n.toJS()).join(', ');
    return `[${items}]`;
  },

  ExpressionStatement(expr, _semi) {
    return `${expr.toJS()};`;
  },

  // Condicional
  IfStatement(_se, _lp, cond, _rp, block, _senao, elseBlock) {
    let js = `if (${cond.toJS()}) ${block.toJS()}`;
    if (elseBlock.children.length > 0) {
      js += ` else ${elseBlock.children[0].toJS()}`;
    }
    return js;
  },

  // Laços
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

  // Controle de fluxo
  BreakStatement(_quebre, _semi) {
    return 'break;';
  },

  ContinueStatement(_continue, _semi) {
    return 'continue;';
  },

  // Tratamento de erros
  TryStatement(_tente, block, catchClause, finallyClause) {
    let js = `try ${block.toJS()}`;
    if (catchClause.children.length > 0) {
      js += ` ${catchClause.children[0].toJS()}`;
    }
    if (finallyClause.children.length > 0) {
      js += ` ${finallyClause.children[0].toJS()}`;
    }
    return js;
  },

  CatchClause(_capture, _lp, param, _rp, block) {
    return `catch (${param.toJS()}) ${block.toJS()}`;
  },

  FinallyClause(_finalmente, block) {
    return `finally ${block.toJS()}`;
  },

  ThrowStatement(_lance, expr, _semi) {
    return `throw ${expr.toJS()};`;
  },

  // Escolha (switch)
  SwitchStatement(_escolha, _lp, expr, _rp, _lb, cases, defaultClause, _rb) {
    const casesJs = cases.children.map(c => c.toJS()).join('\n');
    const defaultJs = defaultClause.children.length > 0 ? '\n' + defaultClause.children[0].toJS() : '';
    return `switch (${expr.toJS()}) {\n${casesJs}${defaultJs}\n}`;
  },

  CaseClause(_caso, expr, _colon, statements) {
    const stmts = statements.children.map(s => s.toJS()).join('\n');
    return `case ${expr.toJS()}:\n${stmts}`;
  },

  DefaultClause(_padrao, _colon, statements) {
    const stmts = statements.children.map(s => s.toJS()).join('\n');
    return `default:\n${stmts}`;
  },

  // Funções
  FunctionDeclaration_async(_assincrono, _funcao, name, _lp, params, _rp, block) {
    return `async function ${name.toJS()}(${params.toJS()}) ${block.toJS()}`;
  },

  FunctionDeclaration_sync(_funcao, name, _lp, params, _rp, block) {
    return `function ${name.toJS()}(${params.toJS()}) ${block.toJS()}`;
  },

  Params(list) {
    return list.asIteration().children.map(p => p.toJS()).join(', ');
  },

  ReturnStatement(_retorne, expr, _semi) {
    if (expr.children.length > 0) {
      return `return ${expr.children[0].toJS()};`;
    }
    return 'return;';
  },

  // Classes
  ClassDeclaration(_classe, name, body) {
    return `class ${name.toJS()} ${body.toJS()}`;
  },

  ClassBody(_lb, methods, _rb) {
    const body = methods.children.map(m => m.toJS()).join('\n');
    return `{\n${body}\n}`;
  },

  MethodDefinition_constructor(_construtor, _lp, params, _rp, block) {
    return `constructor(${params.toJS()}) ${block.toJS()}`;
  },

  MethodDefinition_asyncMethod(_assincrono, name, _lp, params, _rp, block) {
    return `async ${name.toJS()}(${params.toJS()}) ${block.toJS()}`;
  },

  MethodDefinition_method(name, _lp, params, _rp, block) {
    return `${name.toJS()}(${params.toJS()}) ${block.toJS()}`;
  },

  // Blocos
  Block(_lb, statements, _rb) {
    const body = statements.children.map(s => s.toJS()).join('\n');
    return `{\n${body}\n}`;
  },

  EmptyStatement(_semi) {
    return ';';
  },

  // Expressões
  AssignmentExpression_asyncArrow(_assincrono, params, _arrow, body) {
    return `async ${params.toJS()} => ${body.toJS()}`;
  },

  AssignmentExpression_arrow(params, _arrow, body) {
    return `${params.toJS()} => ${body.toJS()}`;
  },

  ArrowParams_parens(_lp, params, _rp) {
    return `(${params.toJS()})`;
  },

  ArrowParams_ident(name) {
    return name.toJS();
  },

  ArrowBody_block(block) {
    return block.toJS();
  },

  ArrowBody_expr(expr) {
    return expr.toJS();
  },

  AssignmentExpression_addAssign(lhs, _op, expr) {
    return `${lhs.toJS()} += ${expr.toJS()}`;
  },

  AssignmentExpression_subAssign(lhs, _op, expr) {
    return `${lhs.toJS()} -= ${expr.toJS()}`;
  },

  AssignmentExpression_mulAssign(lhs, _op, expr) {
    return `${lhs.toJS()} *= ${expr.toJS()}`;
  },

  AssignmentExpression_divAssign(lhs, _op, expr) {
    return `${lhs.toJS()} /= ${expr.toJS()}`;
  },

  AssignmentExpression_assign(lhs, _eq, expr) {
    return `${lhs.toJS()} = ${expr.toJS()}`;
  },

  TernaryExpression_ternary(cond, _q, thenExpr, _colon, elseExpr) {
    return `${cond.toJS()} ? ${thenExpr.toJS()} : ${elseExpr.toJS()}`;
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

  UnaryExpression_await(_aguarde, expr) {
    return `await ${expr.toJS()}`;
  },

  UnaryExpression_new(_novo, expr) {
    return `new ${expr.toJS()}`;
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
    return list.asIteration().children.map(a => a.toJS()).join(', ');
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

  PrimaryExpression_this(_) {
    return 'this';
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

  PrimaryExpression_template(node) {
    return node.toJS();
  },

  templateLiteral(_open, parts, _close) {
    return `\`${parts.children.map(p => p.toJS()).join('')}\``;
  },

  templatePart_interp(_open, expr, _close) {
    const src = expr.sourceString;
    const match = grammar.match(src, 'Expression');
    if (match.failed()) return `\${${src}}`;
    return `\${${semantics(match).toJS()}}`;
  },

  templatePart_chars(chars) {
    return chars.sourceString;
  },

  templateExpr(_chars) {
    return this.sourceString;
  },

  stringLiteral(_open, chars, _close) {
    return `"${chars.sourceString}"`;
  },

  SpreadOrExpr_spread(_dots, expr) {
    return `...${expr.toJS()}`;
  },

  SpreadOrExpr_expr(expr) {
    return expr.toJS();
  },

  ArrayLiteral(_lb, elements, _rb) {
    const items = elements.asIteration().children.map(e => e.toJS()).join(', ');
    return `[${items}]`;
  },

  ObjectLiteral(_lb, props, _rb) {
    const items = props.asIteration().children.map(p => p.toJS()).join(', ');
    return `{${items}}`;
  },

  PropertyOrSpread_spread(_dots, expr) {
    return `...${expr.toJS()}`;
  },

  PropertyOrSpread_prop(prop) {
    return prop.toJS();
  },

  PropertyDef(key, _colon, value) {
    return `${key.toJS()}: ${value.toJS()}`;
  },

  numberLiteral(intPart, _dot, decPart) {
    return this.sourceString;
  },

  identifier(_start, _rest) {
    const name = this.sourceString;
    return identifierMap[name] || name;
  },

  _terminal() {
    return this.sourceString;
  },
});

/**
 * Transpila código JavaScripto (pt-BR) para JavaScript válido.
 *
 * @param {string} source — código em sintaxe pt-BR
 * @returns {string} — código JavaScript equivalente
 * @throws {Error} — erro de sintaxe com mensagem em português
 */
export function transpile(source) {
  const matchResult = grammar.match(source);

  if (matchResult.failed()) {
    const error = new Error(`Erro de sintaxe: ${matchResult.shortMessage}`);
    error.name = 'ErroSintaxe';
    throw error;
  }

  return semantics(matchResult).toJS();
}

export { grammar };
