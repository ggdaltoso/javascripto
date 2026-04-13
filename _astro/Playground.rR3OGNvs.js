import{j as m}from"./jsx-runtime.B9a6vIyi.js";import{r as _}from"./index.DNi1g-pO.js";import{H as xn,t as f,E as ie,a as yn,s as Pt,d as Sn,i as _n,b as vn,e as jt,f as In,L as bn,l as En,h as wn,g as An,j as Cn,k as Pn,m as jn,n as On,o as Ln,p as Nn,q as Jn,r as Ot,u as $n,v as kn,w as Rn,x as Fn,y as Dn,z as Tn,A as Mn,C as Bn}from"./index.CUM0eo5L.js";import{javascriptoCompletion as qn,javascriptoLanguage as Un,javascriptoFunctionHighlight as Gn}from"./codemirror-lang-javascripto.BmIaz1lu.js";import{Terminal as zn}from"./index.CSpIYsnc.js";import"./_slug_.b1c42063.DA75VA9Q.js";function D(t){const e=t||"";return function(){throw new Error("this method "+e+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function Q(t,e){if(!t)throw new Error(e||"Assertion failed")}function Re(t,e,n){let r;Object.defineProperty(t,e,{get(){return r||(r=n.call(this)),r}})}function Lt(t,e){const n=[];for(;e-- >0;)n.push(t());return n}function Nt(t,e){return new Array(e+1).join(t)}function ve(t,e){return Lt(()=>t,e)}function Fe(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];t.lastIndexOf(r)!==n&&e.indexOf(r)<0&&e.push(r)}return e}function Jt(t){const e=[];return t.forEach(n=>{e.indexOf(n)<0&&e.push(n)}),e}function Z(t){const e=t[0];return e===e.toUpperCase()}function $t(t){return!Z(t)}function kt(t,e,n){const r=" ";return t.length<e?Nt(r,e-t.length)+t:t}function ee(){this.strings=[]}ee.prototype.append=function(t){this.strings.push(t)};ee.prototype.contents=function(){return this.strings.join("")};const Ae=t=>String.fromCodePoint(parseInt(t,16));function Rt(t){if(t.charAt(0)==="\\")switch(t.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return Ae(t.slice(2,4));case"u":return t.charAt(2)==="{"?Ae(t.slice(3,-1)):Ae(t.slice(2,6));default:return t.charAt(1)}else return t}function Ft(t){if(t==null)return String(t);const e=Object.prototype.toString.call(t);try{let n;return t.constructor&&t.constructor.name?n=t.constructor.name:e.indexOf("[object ")===0?n=e.slice(8,-1):n=typeof t,n+": "+JSON.stringify(String(t))}catch{return e}}function Dt(t,e="unexpected null value"){if(t==null)throw new Error(e);return t}const Kn=Object.freeze(Object.defineProperty({__proto__:null,StringBuffer:ee,abstract:D,assert:Q,checkNotNull:Dt,copyWithoutDuplicates:Jt,defineLazyProperty:Re,getDuplicates:Fe,isLexical:$t,isSyntactic:Z,padLeft:kt,repeat:ve,repeatFn:Lt,repeatStr:Nt,unescapeCodePoint:Rt,unexpectedObjToString:Ft},Symbol.toStringTag,{value:"Module"})),Tt=t=>new RegExp(String.raw`\p{${t}}`,"u"),De=Object.fromEntries(["Cc","Cf","Cn","Co","Cs","Ll","Lm","Lo","Lt","Lu","Mc","Me","Mn","Nd","Nl","No","Pc","Pd","Pe","Pf","Pi","Po","Ps","Sc","Sk","Sm","So","Zl","Zp","Zs"].map(t=>[t,Tt(t)]));De.Ltmo=/\p{Lt}|\p{Lm}|\p{Lo}/u;const at=Object.fromEntries(["XID_Start","XID_Continue","White_Space"].map(t=>[t,Tt(t)]));class x{constructor(){if(this.constructor===x)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(e){return e&&(this.source=e.trimmed()),this}}const J=Object.create(x.prototype),$=Object.create(x.prototype);class L extends x{constructor(e){super(),this.obj=e}}class k extends x{constructor(e,n){super(),this.from=e,this.to=n,this.matchCodePoint=e.length>1||n.length>1}}class R extends x{constructor(e){super(),this.index=e}}class A extends x{constructor(e){super(),this.terms=e}}class Ie extends A{constructor(e,n,r){const s=e.rules[n].body;super([r,s]),this.superGrammar=e,this.name=n,this.body=r}}class be extends A{constructor(e,n,r,s){const i=e.rules[n].body;super([...r,i,...s]),this.superGrammar=e,this.ruleName=n,this.expansionPos=r.length}}class P extends x{constructor(e){super(),this.factors=e}}class T extends x{constructor(e){super(),this.expr=e}}class te extends T{}class oe extends T{}class V extends T{}te.prototype.operator="*";oe.prototype.operator="+";V.prototype.operator="?";te.prototype.minNumMatches=0;oe.prototype.minNumMatches=1;V.prototype.minNumMatches=0;te.prototype.maxNumMatches=Number.POSITIVE_INFINITY;oe.prototype.maxNumMatches=Number.POSITIVE_INFINITY;V.prototype.maxNumMatches=1;class j extends x{constructor(e){super(),this.expr=e}}class M extends x{constructor(e){super(),this.expr=e}}class q extends x{constructor(e){super(),this.expr=e}}class S extends x{constructor(e,n=[]){super(),this.ruleName=e,this.args=n}isSyntactic(){return Z(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class O extends x{constructor(e){if(super(),this.categoryOrProp=e,e in De)this.pattern=De[e];else if(e in at)this.pattern=at[e];else throw new Error(`Invalid Unicode category or property name: ${JSON.stringify(e)}`)}}function E(t,e){let n;return e?(n=new Error(e.getLineAndColumnMessage()+t),n.shortMessage=t,n.interval=e):n=new Error(t),n}function Te(){return E("Interval sources don't match")}function Hn(t){const e=new Error;return Object.defineProperty(e,"message",{enumerable:!0,get(){return t.message}}),Object.defineProperty(e,"shortMessage",{enumerable:!0,get(){return"Expected "+t.getExpectedText()}}),e.interval=t.getInterval(),e}function Wn(t,e,n){const r=e?`Grammar ${t} is not declared in namespace '${e}'`:"Undeclared grammar "+t;return E(r,n)}function Vn(t,e){return E("Grammar "+t.name+" is already declared in this namespace")}function Yn(t){return E(`Grammar '${t.name}' does not support incremental parsing`)}function Mt(t,e,n){return E("Rule "+t+" is not declared in grammar "+e,n)}function Qn(t,e,n){return E("Cannot override rule "+t+" because it is not declared in "+e,n)}function Xn(t,e,n){return E("Cannot extend rule "+t+" because it is not declared in "+e,n)}function lt(t,e,n,r){let s="Duplicate declaration for rule '"+t+"' in grammar '"+e+"'";return e!==n&&(s+=" (originally declared in '"+n+"')"),E(s,r)}function Bt(t,e,n,r){return E("Wrong number of parameters for rule "+t+" (expected "+e+", got "+n+")",r)}function Zn(t,e,n,r){return E("Wrong number of arguments for rule "+t+" (expected "+e+", got "+n+")",r)}function ct(t,e,n){return E("Duplicate parameter names in rule "+t+": "+e.join(", "),n)}function er(t,e){return E("Invalid parameter to rule "+t+": "+e+" has arity "+e.getArity()+", but parameter expressions must have arity 1",e.source)}const tr="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function nr(t,e){return E("Cannot apply syntactic rule "+t+" from here (inside a lexical context)",e.source)}function rr(t){const{ruleName:e}=t;return E(`applySyntactic is for syntactic rules, but '${e}' is a lexical rule. `+tr,t.source)}function sr(t){return E("applySyntactic is not required here (in a syntactic context)",t.source)}function ut(t,e){return E("Incorrect argument type: expected "+t,e.source)}function ir(t){return E("'...' can appear at most once in a rule body",t.source)}function or(t){const e=t._node;Q(e&&e.isNonterminal()&&e.ctorName==="escapeChar_unicodeCodePoint");const n=t.children.slice(1,-1).map(s=>s.source),r=n[0].coverageWith(...n.slice(1));return E(`U+${r.contents} is not a valid Unicode code point`,r)}function qt(t,e){const n=e.length>0?e[e.length-1].args:[];let s="Nullable expression "+t.expr.substituteParams(n)+" is not allowed inside '"+t.operator+"' (possible infinite loop)";if(e.length>0){const i=e.map(o=>new S(o.ruleName,o.args)).join(`
`);s+=`
Application stack (most recent application last):
`+i}return E(s,t.expr.source)}function Ut(t,e,n,r){return E("Rule "+t+" involves an alternation which has inconsistent arity (expected "+e+", got "+n+")",r.source)}function ar(t){const e=t.map(n=>n.message);return E(["Errors:"].concat(e).join(`
- `),t[0].interval)}function lr(t,e,n,r){let s=r.slice(0,-1).map(l=>{const p="  "+l[0].name+" > "+l[1];return l.length===3?p+" for '"+l[2]+"'":p}).join(`
`);s+=`
  `+e+" > "+t;let i="";t==="_iter"&&(i=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const o=[`Missing semantic action for '${t}' in ${n} '${e}'.${i}`,"Action stack (most recent call last):",s].join(`
`),a=E(o);return a.name="missingSemanticAction",a}function cr(t){if(t.length===1)throw t[0];if(t.length>1)throw ar(t)}function ur(t){let e=0;return t.map(r=>{const s=r.toString();return e=Math.max(e,s.length),s}).map(r=>kt(r,e))}function pt(t,e,n){const r=t.length,s=t.slice(0,n),i=t.slice(n+e.length);return(s+e+i).substr(0,r)}function pr(...t){const e=this,{offset:n}=e,{repeatStr:r}=Kn,s=new ee;s.append("Line "+e.lineNum+", col "+e.colNum+`:
`);const i=ur([e.prevLine==null?0:e.lineNum-1,e.lineNum,e.nextLine==null?0:e.lineNum+1]),o=(d,c,u)=>{s.append(u+i[d]+" | "+c+`
`)};e.prevLine!=null&&o(0,e.prevLine,"  "),o(1,e.line,"> ");const a=e.line.length;let l=r(" ",a+1);for(let d=0;d<t.length;++d){let c=t[d][0],u=t[d][1];Q(c>=0&&c<=u,"range start must be >= 0 and <= end");const h=n-e.colNum+1;c=Math.max(0,c-h),u=Math.min(u-h,a),l=pt(l,r("~",u-c),c)}const p=2+i[1].length+3;return s.append(r(" ",p)),l=pt(l,"^",e.colNum-1),s.append(l.replace(/ +$/,"")+`
`),e.nextLine!=null&&o(2,e.nextLine,"  "),s.contents()}let Me=[];function Gt(t){Me.push(t)}function mr(t){Me.forEach(e=>{e(t)}),Me=null}function He(t,e){let n=1,r=1,s=0,i=0,o=null,a=null,l=-1;for(;s<e;){const c=t.charAt(s++);c===`
`?(n++,r=1,l=i,i=s):c!=="\r"&&r++}let p=t.indexOf(`
`,i);if(p===-1)p=t.length;else{const c=t.indexOf(`
`,p+1);o=c===-1?t.slice(p):t.slice(p,c),o=o.replace(/^\r?\n/,"").replace(/\r$/,"")}l>=0&&(a=t.slice(l,i).replace(/\r?\n$/,""));const d=t.slice(i,p).replace(/\r$/,"");return{offset:e,lineNum:n,colNum:r,line:d,prevLine:a,nextLine:o,toString:pr}}function We(t,e,...n){return He(t,e).toString(...n)}const mt=(()=>{let t=0;return e=>""+e+t++})();class N{constructor(e,n,r){Object.defineProperty(this,"_sourceString",{value:e,configurable:!1,enumerable:!1,writable:!1}),this.startIdx=n,this.endIdx=r}get sourceString(){return this._sourceString}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...e){return N.coverage(...e,this)}collapsedLeft(){return new N(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new N(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return He(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const e=[this.startIdx,this.endIdx];return We(this.sourceString,this.startIdx,e)}minus(e){if(this.sourceString!==e.sourceString)throw Te();return this.startIdx===e.startIdx&&this.endIdx===e.endIdx?[]:this.startIdx<e.startIdx&&e.endIdx<this.endIdx?[new N(this.sourceString,this.startIdx,e.startIdx),new N(this.sourceString,e.endIdx,this.endIdx)]:this.startIdx<e.endIdx&&e.endIdx<this.endIdx?[new N(this.sourceString,e.endIdx,this.endIdx)]:this.startIdx<e.startIdx&&e.startIdx<this.endIdx?[new N(this.sourceString,this.startIdx,e.startIdx)]:[this]}relativeTo(e){if(this.sourceString!==e.sourceString)throw Te();return Q(this.startIdx>=e.startIdx&&this.endIdx<=e.endIdx,"other interval does not cover this one"),new N(this.sourceString,this.startIdx-e.startIdx,this.endIdx-e.startIdx)}trimmed(){const{contents:e}=this,n=this.startIdx+e.match(/^\s*/)[0].length,r=this.endIdx-e.match(/\s*$/)[0].length;return new N(this.sourceString,n,r)}subInterval(e,n){const r=this.startIdx+e;return new N(this.sourceString,r,r+n)}}N.coverage=function(t,...e){let{startIdx:n,endIdx:r}=t;for(const s of e){if(s.sourceString!==t.sourceString)throw Te();n=Math.min(n,s.startIdx),r=Math.max(r,s.endIdx)}return new N(t.sourceString,n,r)};const dr=65535,hr=1114111;class Ee{constructor(e){this.source=e,this.pos=0,this.examinedLength=0}atEnd(){const e=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),e}next(){const e=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),e}nextCharCode(){const e=this.next();return e&&e.charCodeAt(0)}nextCodePoint(){const e=this.source.slice(this.pos++).codePointAt(0);return e>dr&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),e}matchString(e,n){let r;if(n){for(r=0;r<e.length;r++){const s=this.next(),i=e[r];if(s==null||s.toUpperCase()!==i.toUpperCase())return!1}return!0}for(r=0;r<e.length;r++)if(this.next()!==e[r])return!1;return!0}sourceSlice(e,n){return this.source.slice(e,n)}interval(e,n){return new N(this.source,e,n||this.pos)}}class zt{constructor(e,n,r,s,i,o,a){this.matcher=e,this.input=n,this.startExpr=r,this._cst=s,this._cstOffset=i,this._rightmostFailurePosition=o,this._rightmostFailures=a,this.failed()&&(Re(this,"message",function(){const l="Expected "+this.getExpectedText();return We(this.input,this.getRightmostFailurePosition())+l}),Re(this,"shortMessage",function(){const l="expected "+this.getExpectedText(),p=He(this.input,this.getRightmostFailurePosition());return"Line "+p.lineNum+", col "+p.colNum+": "+l}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const e=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=e.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const e=new ee;let n=this.getRightmostFailures();n=n.filter(r=>!r.isFluffy());for(let r=0;r<n.length;r++)r>0&&(r===n.length-1?e.append(n.length>2?", or ":" or "):e.append(", ")),e.append(n[r].toString());return e.contents()}getInterval(){const e=this.getRightmostFailurePosition();return new N(this.input,e,e)}}class fr{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(e){return this.applicationMemoKeyStack.indexOf(e.toMemoKey())>=0}enter(e){this.applicationMemoKeyStack.push(e.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(e,n){n.isLeftRecursion=!0,n.headApplication=e,n.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=n;const{applicationMemoKeyStack:r}=this,s=r.indexOf(e.toMemoKey())+1,i=r.slice(s);n.isInvolved=function(o){return i.indexOf(o)>=0},n.updateInvolvedApplicationMemoKeys=function(){for(let o=s;o<r.length;o++){const a=r[o];this.isInvolved(a)||i.push(a)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(e){if(!e.isLeftRecursion)return!0;const{applicationMemoKeyStack:n}=this;for(let r=0;r<n.length;r++){const s=n[r];if(e.isInvolved(s))return!1}return!0}memoize(e,n){return this.memo[e]=n,this.maxExaminedLength=Math.max(this.maxExaminedLength,n.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,n.rightmostFailureOffset),n}clearObsoleteEntries(e,n){if(e+this.maxExaminedLength<=n)return;const{memo:r}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(r).forEach(s=>{const i=r[s];e+i.examinedLength>n?delete r[s]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,i.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,i.rightmostFailureOffset))})}}const gr="✗",xr="✓",yr="⋅",Sr="⇒",_r="␉",vr="␊",Ir="␍",Be={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function br(t){return ve(" ",t).join("")}function Er(t,e,n){const r=Kt(t.slice(e,e+n));return r.length<n?r+ve(" ",n-r.length).join(""):r}function Kt(t){return typeof t=="string"?t.replace(/ /g,yr).replace(/\t/g,_r).replace(/\n/g,vr).replace(/\r/g,Ir):String(t)}class Y{constructor(e,n,r,s,i,o,a){this.input=e,this.pos=this.pos1=n,this.pos2=r,this.source=new N(e,n,r),this.expr=s,this.bindings=o,this.children=a||[],this.terminatingLREntry=null,this._flags=i?Be.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(e){const n=new Y(this.input,this.pos,this.pos2,e,this.succeeded,this.bindings,this.children);return n.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,n.isImplicitSpaces=this.isImplicitSpaces,n.isMemoized=this.isMemoized,n.isRootNode=this.isRootNode,n.terminatesLR=this.terminatesLR,n.terminatingLREntry=this.terminatingLREntry,n}recordLRTermination(e,n){this.terminatingLREntry=new Y(this.input,this.pos,this.pos2,this.expr,!1,[n],[e]),this.terminatingLREntry.terminatesLR=!0}walk(e,n){let r=e;typeof r=="function"&&(r={enter:r});function s(i,o,a){let l=!0;r.enter&&r.enter.call(n,i,o,a)===Y.prototype.SKIP&&(l=!1),l&&(i.children.forEach(p=>{s(p,i,a+1)}),r.exit&&r.exit.call(n,i,o,a))}this.isRootNode?this.children.forEach(i=>{s(i,null,0)}):s(this,null,0)}toString(){const e=new ee;return this.walk((n,r,s)=>{if(!n)return this.SKIP;if(n.expr.constructor.name!=="Alt"){if(e.append(Er(n.input,n.pos,10)+br(s*2+1)),e.append((n.succeeded?xr:gr)+" "+n.displayString),n.isHeadOfLeftRecursion&&e.append(" (LR)"),n.succeeded){const o=Kt(n.source.contents);e.append(" "+Sr+"  "),e.append(typeof o=="string"?'"'+o+'"':o)}e.append(`
`)}}),e.contents()}}Y.prototype.SKIP={};Object.keys(Be).forEach(t=>{const e=Be[t];Object.defineProperty(Y.prototype,t,{get(){return(this._flags&e)!==0},set(n){n?this._flags|=e:this._flags&=~e}})});x.prototype.allowsSkippingPrecedingSpace=D("allowsSkippingPrecedingSpace");J.allowsSkippingPrecedingSpace=$.allowsSkippingPrecedingSpace=S.prototype.allowsSkippingPrecedingSpace=L.prototype.allowsSkippingPrecedingSpace=k.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=function(){return!0};A.prototype.allowsSkippingPrecedingSpace=T.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=M.prototype.allowsSkippingPrecedingSpace=j.prototype.allowsSkippingPrecedingSpace=R.prototype.allowsSkippingPrecedingSpace=P.prototype.allowsSkippingPrecedingSpace=function(){return!1};let ae;Gt(t=>{ae=t});let Se;x.prototype.assertAllApplicationsAreValid=function(t,e){Se=0,this._assertAllApplicationsAreValid(t,e)};x.prototype._assertAllApplicationsAreValid=D("_assertAllApplicationsAreValid");J._assertAllApplicationsAreValid=$._assertAllApplicationsAreValid=L.prototype._assertAllApplicationsAreValid=k.prototype._assertAllApplicationsAreValid=R.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=function(t,e){};q.prototype._assertAllApplicationsAreValid=function(t,e){Se++,this.expr._assertAllApplicationsAreValid(t,e),Se--};A.prototype._assertAllApplicationsAreValid=function(t,e){for(let n=0;n<this.terms.length;n++)this.terms[n]._assertAllApplicationsAreValid(t,e)};P.prototype._assertAllApplicationsAreValid=function(t,e){for(let n=0;n<this.factors.length;n++)this.factors[n]._assertAllApplicationsAreValid(t,e)};T.prototype._assertAllApplicationsAreValid=j.prototype._assertAllApplicationsAreValid=M.prototype._assertAllApplicationsAreValid=function(t,e){this.expr._assertAllApplicationsAreValid(t,e)};S.prototype._assertAllApplicationsAreValid=function(t,e,n=!1){const r=e.rules[this.ruleName],s=Z(t)&&Se===0;if(!r)throw Mt(this.ruleName,e.name,this.source);if(!n&&Z(this.ruleName)&&!s)throw nr(this.ruleName,this);const i=this.args.length,o=r.formals.length;if(i!==o)throw Zn(this.ruleName,o,i,this.source);const a=ae&&r===ae.rules.applySyntactic;if(ae&&r===ae.rules.caseInsensitive&&!(this.args[0]instanceof L))throw ut('a Terminal (e.g. "abc")',this.args[0]);if(a){const p=this.args[0];if(!(p instanceof S))throw ut("a syntactic rule application",p);if(!Z(p.ruleName))throw rr(p);if(s)throw sr(this)}this.args.forEach(p=>{if(p._assertAllApplicationsAreValid(t,e,a),p.getArity()!==1)throw er(this.ruleName,p)})};x.prototype.assertChoicesHaveUniformArity=D("assertChoicesHaveUniformArity");J.assertChoicesHaveUniformArity=$.assertChoicesHaveUniformArity=L.prototype.assertChoicesHaveUniformArity=k.prototype.assertChoicesHaveUniformArity=R.prototype.assertChoicesHaveUniformArity=q.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=function(t){};A.prototype.assertChoicesHaveUniformArity=function(t){if(this.terms.length===0)return;const e=this.terms[0].getArity();for(let n=0;n<this.terms.length;n++){const r=this.terms[n];r.assertChoicesHaveUniformArity();const s=r.getArity();if(e!==s)throw Ut(t,e,s,r)}};Ie.prototype.assertChoicesHaveUniformArity=function(t){const e=this.terms[0].getArity(),n=this.terms[1].getArity();if(e!==n)throw Ut(t,n,e,this.terms[0])};P.prototype.assertChoicesHaveUniformArity=function(t){for(let e=0;e<this.factors.length;e++)this.factors[e].assertChoicesHaveUniformArity(t)};T.prototype.assertChoicesHaveUniformArity=function(t){this.expr.assertChoicesHaveUniformArity(t)};j.prototype.assertChoicesHaveUniformArity=function(t){};M.prototype.assertChoicesHaveUniformArity=function(t){this.expr.assertChoicesHaveUniformArity(t)};S.prototype.assertChoicesHaveUniformArity=function(t){};x.prototype.assertIteratedExprsAreNotNullable=D("assertIteratedExprsAreNotNullable");J.assertIteratedExprsAreNotNullable=$.assertIteratedExprsAreNotNullable=L.prototype.assertIteratedExprsAreNotNullable=k.prototype.assertIteratedExprsAreNotNullable=R.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=function(t){};A.prototype.assertIteratedExprsAreNotNullable=function(t){for(let e=0;e<this.terms.length;e++)this.terms[e].assertIteratedExprsAreNotNullable(t)};P.prototype.assertIteratedExprsAreNotNullable=function(t){for(let e=0;e<this.factors.length;e++)this.factors[e].assertIteratedExprsAreNotNullable(t)};T.prototype.assertIteratedExprsAreNotNullable=function(t){if(this.expr.assertIteratedExprsAreNotNullable(t),this.expr.isNullable(t))throw qt(this,[])};V.prototype.assertIteratedExprsAreNotNullable=j.prototype.assertIteratedExprsAreNotNullable=M.prototype.assertIteratedExprsAreNotNullable=q.prototype.assertIteratedExprsAreNotNullable=function(t){this.expr.assertIteratedExprsAreNotNullable(t)};S.prototype.assertIteratedExprsAreNotNullable=function(t){this.args.forEach(e=>{e.assertIteratedExprsAreNotNullable(t)})};class Ve{constructor(e){this.matchLength=e}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(e){if(this.children)return this.children[e]}indexOfChild(e){return this.children.indexOf(e)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(e){const n=this.indexOfChild(e);if(n<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(n===0)throw new Error("cannot get child before first child");return this.childAt(n-1)}childAfter(e){const n=this.indexOfChild(e);if(n<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(n===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(n+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class ne extends Ve{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class wr extends Ve{constructor(e,n,r,s){super(s),this.ruleName=e,this.children=n,this.childOffsets=r}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return $t(this.ctorName)}isSyntactic(){return Z(this.ctorName)}}class Ht extends Ve{constructor(e,n,r,s){super(r),this.children=e,this.childOffsets=n,this.optional=s}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}x.prototype.eval=D("eval");J.eval=function(t){const{inputStream:e}=t,n=e.pos,r=e.nextCodePoint();return r!==void 0?(t.pushBinding(new ne(String.fromCodePoint(r).length),n),!0):(t.processFailure(n,this),!1)};$.eval=function(t){const{inputStream:e}=t,n=e.pos;return e.atEnd()?(t.pushBinding(new ne(0),n),!0):(t.processFailure(n,this),!1)};L.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos;return e.matchString(this.obj)?(t.pushBinding(new ne(this.obj.length),n),!0):(t.processFailure(n,this),!1)};k.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos,r=this.matchCodePoint?e.nextCodePoint():e.nextCharCode();return r!==void 0&&this.from.codePointAt(0)<=r&&r<=this.to.codePointAt(0)?(t.pushBinding(new ne(String.fromCodePoint(r).length),n),!0):(t.processFailure(n,this),!1)};R.prototype.eval=function(t){return t.eval(t.currentApplication().args[this.index])};q.prototype.eval=function(t){t.enterLexifiedContext();const e=t.eval(this.expr);return t.exitLexifiedContext(),e};A.prototype.eval=function(t){for(let e=0;e<this.terms.length;e++)if(t.eval(this.terms[e]))return!0;return!1};P.prototype.eval=function(t){for(let e=0;e<this.factors.length;e++){const n=this.factors[e];if(!t.eval(n))return!1}return!0};T.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos,r=this.getArity(),s=[],i=[];for(;s.length<r;)s.push([]),i.push([]);let o=0,a=n,l;for(;o<this.maxNumMatches&&t.eval(this.expr);){if(e.pos===a)throw qt(this,t._applicationStack);a=e.pos,o++;const u=t._bindings.splice(t._bindings.length-r,r),h=t._bindingOffsets.splice(t._bindingOffsets.length-r,r);for(l=0;l<u.length;l++)s[l].push(u[l]),i[l].push(h[l])}if(o<this.minNumMatches)return!1;let p=t.posToOffset(n),d=0;if(o>0){const u=s[r-1],h=i[r-1],g=h[h.length-1]+u[u.length-1].matchLength;p=i[0][0],d=g-p}const c=this instanceof V;for(l=0;l<s.length;l++)t._bindings.push(new Ht(s[l],i[l],d,c)),t._bindingOffsets.push(p);return!0};j.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos;t.pushFailuresInfo();const r=t.eval(this.expr);return t.popFailuresInfo(),r?(t.processFailure(n,this),!1):(e.pos=n,!0)};M.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos;return t.eval(this.expr)?(e.pos=n,!0):!1};S.prototype.eval=function(t){const e=t.currentApplication(),n=e?e.args:[],r=this.substituteParams(n),s=t.getCurrentPosInfo();if(s.isActive(r))return r.handleCycle(t);const i=r.toMemoKey(),o=s.memo[i];if(o&&s.shouldUseMemoizedResult(o)){if(t.hasNecessaryInfo(o))return t.useMemoizedResult(t.inputStream.pos,o);delete s.memo[i]}return r.reallyEval(t)};S.prototype.handleCycle=function(t){const e=t.getCurrentPosInfo(),{currentLeftRecursion:n}=e,r=this.toMemoKey();let s=e.memo[r];return n&&n.headApplication.toMemoKey()===r?s.updateInvolvedApplicationMemoKeys():s||(s=e.memoize(r,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),e.startLeftRecursion(this,s)),t.useMemoizedResult(t.inputStream.pos,s)};S.prototype.reallyEval=function(t){const{inputStream:e}=t,n=e.pos,r=t.getCurrentPosInfo(),s=t.grammar.rules[this.ruleName],{body:i}=s,{description:o}=s;t.enterApplication(r,this),o&&t.pushFailuresInfo();const a=e.examinedLength;e.examinedLength=0;let l=this.evalOnce(i,t);const p=r.currentLeftRecursion,d=this.toMemoKey(),c=p&&p.headApplication.toMemoKey()===d;let u;t.doNotMemoize?t.doNotMemoize=!1:c?(l=this.growSeedResult(i,t,n,p,l),r.endLeftRecursion(),u=p,u.examinedLength=e.examinedLength-n,u.rightmostFailureOffset=t._getRightmostFailureOffset(),r.memoize(d,u)):(!p||!p.isInvolved(d))&&(u=r.memoize(d,{matchLength:e.pos-n,examinedLength:e.examinedLength-n,value:l,failuresAtRightmostPosition:t.cloneRecordedFailures(),rightmostFailureOffset:t._getRightmostFailureOffset()}));const h=!!l;if(o&&(t.popFailuresInfo(),h||t.processFailure(n,this),u&&(u.failuresAtRightmostPosition=t.cloneRecordedFailures(),u.rightmostFailureOffset=t._getRightmostFailureOffset())),t.isTracing()&&u){const g=t.getTraceEntry(n,this,h,h?[l]:[]);c&&(Q(g.terminatingLREntry!=null||!h),g.isHeadOfLeftRecursion=!0),u.traceEntry=g}return e.examinedLength=Math.max(e.examinedLength,a),t.exitApplication(r,l),h};S.prototype.evalOnce=function(t,e){const{inputStream:n}=e,r=n.pos;if(e.eval(t)){const s=t.getArity(),i=e._bindings.splice(e._bindings.length-s,s),o=e._bindingOffsets.splice(e._bindingOffsets.length-s,s),a=n.pos-r;return new wr(this.ruleName,i,o,a)}else return!1};S.prototype.growSeedResult=function(t,e,n,r,s){if(!s)return!1;const{inputStream:i}=e;for(;;){if(r.matchLength=i.pos-n,r.value=s,r.failuresAtRightmostPosition=e.cloneRecordedFailures(),e.isTracing()){const o=e.trace[e.trace.length-1];r.traceEntry=new Y(e.input,n,i.pos,this,!0,[s],[o.clone()])}if(i.pos=n,s=this.evalOnce(t,e),i.pos-n<=r.matchLength)break;e.isTracing()&&e.trace.splice(-2,1)}return e.isTracing()&&r.traceEntry.recordLRTermination(e.trace.pop(),s),i.pos=n+r.matchLength,r.value};O.prototype.eval=function(t){const{inputStream:e}=t,n=e.pos,r=e.nextCodePoint();if(r!==void 0&&r<=hr){const s=String.fromCodePoint(r);if(this.pattern.test(s))return t.pushBinding(new ne(s.length),n),!0}return t.processFailure(n,this),!1};x.prototype.getArity=D("getArity");J.getArity=$.getArity=L.prototype.getArity=k.prototype.getArity=R.prototype.getArity=S.prototype.getArity=O.prototype.getArity=function(){return 1};A.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()};P.prototype.getArity=function(){let t=0;for(let e=0;e<this.factors.length;e++)t+=this.factors[e].getArity();return t};T.prototype.getArity=function(){return this.expr.getArity()};j.prototype.getArity=function(){return 0};M.prototype.getArity=q.prototype.getArity=function(){return this.expr.getArity()};function z(t,e){const n={};if(t.source&&e){const r=t.source.relativeTo(e);n.sourceInterval=[r.startIdx,r.endIdx]}return n}x.prototype.outputRecipe=D("outputRecipe");J.outputRecipe=function(t,e){return["any",z(this,e)]};$.outputRecipe=function(t,e){return["end",z(this,e)]};L.prototype.outputRecipe=function(t,e){return["terminal",z(this,e),this.obj]};k.prototype.outputRecipe=function(t,e){return["range",z(this,e),this.from,this.to]};R.prototype.outputRecipe=function(t,e){return["param",z(this,e),this.index]};A.prototype.outputRecipe=function(t,e){return["alt",z(this,e)].concat(this.terms.map(n=>n.outputRecipe(t,e)))};Ie.prototype.outputRecipe=function(t,e){return this.terms[0].outputRecipe(t,e)};be.prototype.outputRecipe=function(t,e){const n=this.terms.slice(0,this.expansionPos),r=this.terms.slice(this.expansionPos+1);return["splice",z(this,e),n.map(s=>s.outputRecipe(t,e)),r.map(s=>s.outputRecipe(t,e))]};P.prototype.outputRecipe=function(t,e){return["seq",z(this,e)].concat(this.factors.map(n=>n.outputRecipe(t,e)))};te.prototype.outputRecipe=oe.prototype.outputRecipe=V.prototype.outputRecipe=j.prototype.outputRecipe=M.prototype.outputRecipe=q.prototype.outputRecipe=function(t,e){return[this.constructor.name.toLowerCase(),z(this,e),this.expr.outputRecipe(t,e)]};S.prototype.outputRecipe=function(t,e){return["app",z(this,e),this.ruleName,this.args.map(n=>n.outputRecipe(t,e))]};O.prototype.outputRecipe=function(t,e){return["unicodeChar",z(this,e),this.categoryOrProp]};x.prototype.introduceParams=D("introduceParams");J.introduceParams=$.introduceParams=L.prototype.introduceParams=k.prototype.introduceParams=R.prototype.introduceParams=O.prototype.introduceParams=function(t){return this};A.prototype.introduceParams=function(t){return this.terms.forEach((e,n,r)=>{r[n]=e.introduceParams(t)}),this};P.prototype.introduceParams=function(t){return this.factors.forEach((e,n,r)=>{r[n]=e.introduceParams(t)}),this};T.prototype.introduceParams=j.prototype.introduceParams=M.prototype.introduceParams=q.prototype.introduceParams=function(t){return this.expr=this.expr.introduceParams(t),this};S.prototype.introduceParams=function(t){const e=t.indexOf(this.ruleName);if(e>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new R(e).withSource(this.source)}else return this.args.forEach((n,r,s)=>{s[r]=n.introduceParams(t)}),this};x.prototype.isNullable=function(t){return this._isNullable(t,Object.create(null))};x.prototype._isNullable=D("_isNullable");J._isNullable=k.prototype._isNullable=R.prototype._isNullable=oe.prototype._isNullable=O.prototype._isNullable=function(t,e){return!1};$._isNullable=function(t,e){return!0};L.prototype._isNullable=function(t,e){return typeof this.obj=="string"?this.obj==="":!1};A.prototype._isNullable=function(t,e){return this.terms.length===0||this.terms.some(n=>n._isNullable(t,e))};P.prototype._isNullable=function(t,e){return this.factors.every(n=>n._isNullable(t,e))};te.prototype._isNullable=V.prototype._isNullable=j.prototype._isNullable=M.prototype._isNullable=function(t,e){return!0};q.prototype._isNullable=function(t,e){return this.expr._isNullable(t,e)};S.prototype._isNullable=function(t,e){const n=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(e,n)){const{body:r}=t.rules[this.ruleName],s=r.substituteParams(this.args);e[n]=!1,e[n]=s._isNullable(t,e)}return e[n]};x.prototype.substituteParams=D("substituteParams");J.substituteParams=$.substituteParams=L.prototype.substituteParams=k.prototype.substituteParams=O.prototype.substituteParams=function(t){return this};R.prototype.substituteParams=function(t){return Dt(t[this.index])};A.prototype.substituteParams=function(t){return new A(this.terms.map(e=>e.substituteParams(t)))};P.prototype.substituteParams=function(t){return new P(this.factors.map(e=>e.substituteParams(t)))};T.prototype.substituteParams=j.prototype.substituteParams=M.prototype.substituteParams=q.prototype.substituteParams=function(t){return new this.constructor(this.expr.substituteParams(t))};S.prototype.substituteParams=function(t){if(this.args.length===0)return this;{const e=this.args.map(n=>n.substituteParams(t));return new S(this.ruleName,e)}};function dt(t){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)}function Ye(t){const e=Object.create(null);t.forEach(n=>{e[n]=(e[n]||0)+1}),Object.keys(e).forEach(n=>{if(e[n]<=1)return;let r=1;t.forEach((s,i)=>{s===n&&(t[i]=s+"_"+r++)})})}x.prototype.toArgumentNameList=D("toArgumentNameList");J.toArgumentNameList=function(t,e){return["any"]};$.toArgumentNameList=function(t,e){return["end"]};L.prototype.toArgumentNameList=function(t,e){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+t]};k.prototype.toArgumentNameList=function(t,e){let n=this.from+"_to_"+this.to;return dt(n)||(n="_"+n),dt(n)||(n="$"+t),[n]};A.prototype.toArgumentNameList=function(t,e){const n=this.terms.map(i=>i.toArgumentNameList(t,!0)),r=[],s=n[0].length;for(let i=0;i<s;i++){const o=[];for(let l=0;l<this.terms.length;l++)o.push(n[l][i]);const a=Jt(o);r.push(a.join("_or_"))}return e||Ye(r),r};P.prototype.toArgumentNameList=function(t,e){let n=[];return this.factors.forEach(r=>{const s=r.toArgumentNameList(t,!0);n=n.concat(s),t+=s.length}),e||Ye(n),n};T.prototype.toArgumentNameList=function(t,e){const n=this.expr.toArgumentNameList(t,e).map(r=>r[r.length-1]==="s"?r+"es":r+"s");return e||Ye(n),n};V.prototype.toArgumentNameList=function(t,e){return this.expr.toArgumentNameList(t,e).map(n=>"opt"+n[0].toUpperCase()+n.slice(1))};j.prototype.toArgumentNameList=function(t,e){return[]};M.prototype.toArgumentNameList=q.prototype.toArgumentNameList=function(t,e){return this.expr.toArgumentNameList(t,e)};S.prototype.toArgumentNameList=function(t,e){return[this.ruleName]};O.prototype.toArgumentNameList=function(t,e){return["$"+t]};R.prototype.toArgumentNameList=function(t,e){return["param"+this.index]};x.prototype.toDisplayString=D("toDisplayString");A.prototype.toDisplayString=P.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"};J.toDisplayString=$.toDisplayString=T.prototype.toDisplayString=j.prototype.toDisplayString=M.prototype.toDisplayString=q.prototype.toDisplayString=L.prototype.toDisplayString=k.prototype.toDisplayString=R.prototype.toDisplayString=function(){return this.toString()};S.prototype.toDisplayString=function(){if(this.args.length>0){const t=this.args.map(e=>e.toDisplayString());return this.ruleName+"<"+t.join(",")+">"}else return this.ruleName};O.prototype.toDisplayString=function(){return"Unicode ["+this.categoryOrProp+"] character"};function Ar(t){return t==="description"||t==="string"||t==="code"}class U{constructor(e,n,r){if(!Ar(r))throw new Error("invalid Failure type: "+r);this.pexpr=e,this.text=n,this.type=r,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(e){return this.getText()===e.getText()&&this.type===e.type&&(!this.isFluffy()||this.isFluffy()&&e.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const e=new U(this.pexpr,this.text,this.type);return this.isFluffy()&&e.makeFluffy(),e}toKey(){return this.toString()+"#"+this.type}}x.prototype.toFailure=D("toFailure");J.toFailure=function(t){return new U(this,"any object","description")};$.toFailure=function(t){return new U(this,"end of input","description")};L.prototype.toFailure=function(t){return new U(this,this.obj,"string")};k.prototype.toFailure=function(t){return new U(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")};j.prototype.toFailure=function(t){const e=this.expr===J?"nothing":"not "+this.expr.toFailure(t);return new U(this,e,"description")};M.prototype.toFailure=function(t){return this.expr.toFailure(t)};S.prototype.toFailure=function(t){let{description:e}=t.rules[this.ruleName];return e||(e=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new U(this,e,"description")};O.prototype.toFailure=function(t){return new U(this,"a Unicode ["+this.categoryOrProp+"] character","description")};A.prototype.toFailure=function(t){const n="("+this.terms.map(r=>r.toFailure(t)).join(" or ")+")";return new U(this,n,"description")};P.prototype.toFailure=function(t){const n="("+this.factors.map(r=>r.toFailure(t)).join(" ")+")";return new U(this,n,"description")};T.prototype.toFailure=function(t){const e="("+this.expr.toFailure(t)+this.operator+")";return new U(this,e,"description")};x.prototype.toString=D("toString");J.toString=function(){return"any"};$.toString=function(){return"end"};L.prototype.toString=function(){return JSON.stringify(this.obj)};k.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)};R.prototype.toString=function(){return"$"+this.index};q.prototype.toString=function(){return"#("+this.expr.toString()+")"};A.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(t=>t.toString()).join(" | ")+")"};P.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(t=>t.toString()).join(" ")+")"};T.prototype.toString=function(){return this.expr+this.operator};j.prototype.toString=function(){return"~"+this.expr};M.prototype.toString=function(){return"&"+this.expr};S.prototype.toString=function(){if(this.args.length>0){const t=this.args.map(e=>e.toString());return this.ruleName+"<"+t.join(",")+">"}else return this.ruleName};O.prototype.toString=function(){return"\\p{"+this.categoryOrProp+"}"};class Qe extends x{constructor(e){super(),this.obj=e}_getString(e){const n=e.currentApplication().args[this.obj.index];return Q(n instanceof L,"expected a Terminal expression"),n.obj}allowsSkippingPrecedingSpace(){return!0}eval(e){const{inputStream:n}=e,r=n.pos,s=this._getString(e);return n.matchString(s,!0)?(e.pushBinding(new ne(s.length),r),!0):(e.processFailure(r,this),!1)}getArity(){return 1}substituteParams(e){return new Qe(this.obj.substituteParams(e))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(e){return new U(this,this.obj.toFailure(e)+" (case-insensitive)","description")}_isNullable(e,n){return this.obj._isNullable(e,n)}}let Wt;Gt(t=>{Wt=t.rules.applySyntactic.body});const Ce=new S("spaces");class Cr{constructor(e,n,r){this.matcher=e,this.startExpr=n,this.grammar=e.grammar,this.input=e.getInput(),this.inputStream=new Ee(this.input),this.memoTable=e._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],r!==void 0&&(this.positionToRecordFailures=r,this.recordedFailures=Object.create(null))}posToOffset(e){return e-this._posStack[this._posStack.length-1]}enterApplication(e,n){this._posStack.push(this.inputStream.pos),this._applicationStack.push(n),this.inLexifiedContextStack.push(!1),e.enter(n),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(e,n){const r=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),e.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),n&&this.pushBinding(n,r)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const e=this.currentApplication();return e?e.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(Ce),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(e){return e.allowsSkippingPrecedingSpace()&&e!==Ce?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(e,n){this._bindings.push(e),this._bindingOffsets.push(this.posToOffset(n))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(e){for(;this._bindings.length>e;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(e){let n=this.memoTable[e];return n||(n=this.memoTable[e]=new fr),n}processFailure(e,n){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,e),this.recordedFailures&&e===this.positionToRecordFailures){const r=this.currentApplication();r&&(n=n.substituteParams(r.args)),this.recordFailure(n.toFailure(this.grammar),!1)}}recordFailure(e,n){const r=e.toKey();this.recordedFailures[r]?this.recordedFailures[r].isFluffy()&&!e.isFluffy()&&this.recordedFailures[r].clearFluffy():this.recordedFailures[r]=n?e.clone():e}recordFailures(e,n){Object.keys(e).forEach(r=>{this.recordFailure(e[r],n)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const e=Object.create(null);return Object.keys(this.recordedFailures).forEach(n=>{e[n]=this.recordedFailures[n].clone()}),e}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(e,n){const r=this.memoTable[e];if(r&&n instanceof S){const s=r.memo[n.toMemoKey()];if(s&&s.traceEntry){const i=s.traceEntry.cloneWithExpr(n);return i.isMemoized=!0,i}}return null}getTraceEntry(e,n,r,s){if(n instanceof S){const i=this.currentApplication(),o=i?i.args:[];n=n.substituteParams(o)}return this.getMemoizedTraceEntry(e,n)||new Y(this.input,e,this.inputStream.pos,n,r,s,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(e){return this.trace&&!e.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+e.rightmostFailureOffset===this.positionToRecordFailures?!!e.failuresAtRightmostPosition:!0}useMemoizedResult(e,n){this.trace&&this.trace.push(n.traceEntry);const r=this.inputStream.pos+n.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&this.positionToRecordFailures===r&&n.failuresAtRightmostPosition&&this.recordFailures(n.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,n.examinedLength+e),n.value?(this.inputStream.pos+=n.matchLength,this.pushBinding(n.value,e),!0):!1}eval(e){const{inputStream:n}=this,r=this._bindings.length,s=this.userData;let i;this.recordedFailures&&(i=this.recordedFailures,this.recordedFailures=Object.create(null));const o=n.pos,a=this.maybeSkipSpacesBefore(e);let l;this.trace&&(l=this.trace,this.trace=[]);const p=e.eval(this);if(this.trace){const d=this._bindings.slice(r),c=this.getTraceEntry(a,e,p,d);c.isImplicitSpaces=e===Ce,c.isRootNode=e===this.startExpr,l.push(c),this.trace=l}return p?this.recordedFailures&&n.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(d=>{this.recordedFailures[d].makeFluffy()}):(n.pos=o,this.truncateBindings(r),this.userData=s),this.recordedFailures&&this.recordFailures(i,!1),e===Wt&&this.skipSpaces(),p}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let e;this.recordedFailures&&(e=Object.keys(this.recordedFailures).map(r=>this.recordedFailures[r]));const n=this._bindings[0];return n&&(n.grammar=this.grammar),new zt(this.matcher,this.input,this.startExpr,n,this._bindingOffsets[0],this.rightmostFailurePosition,e)}getTrace(){this.trace=[];const e=this.getMatchResult(),n=this.trace[this.trace.length-1];return n.result=e,n}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Pr{constructor(e){this.grammar=e,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(e){return this._input!==e&&this.replaceInputRange(0,this._input.length,e),this}replaceInputRange(e,n,r){const s=this._input,i=this._memoTable;if(e<0||e>s.length||n<0||n>s.length||e>n)throw new Error("Invalid indices: "+e+" and "+n);this._input=s.slice(0,e)+r+s.slice(n),this._input!==s&&i.length>0&&(this._isMemoTableStale=!0);const o=i.slice(n);i.length=e;for(let a=0;a<r.length;a++)i.push(void 0);for(const a of o)i.push(a);for(let a=0;a<e;a++){const l=i[a];l&&l.clearObsoleteEntries(a,e)}return this}match(e,n={incremental:!0}){return this._match(this._getStartExpr(e),{incremental:n.incremental,tracing:!1})}trace(e,n={incremental:!0}){return this._match(this._getStartExpr(e),{incremental:n.incremental,tracing:!0})}_match(e,n={}){const r={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...n};if(!r.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Yn(this.grammar);const s=new Cr(this,e,r.positionToRecordFailures);return r.tracing?s.getTrace():s.getMatchResult()}_getStartExpr(e){const n=e||this.grammar.defaultStartRule;if(!n)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const r=this.grammar.parseApplication(n);return new P([r,$])}}const le=[],qe=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);class ht{constructor(e,n,r){this._node=e,this.source=n,this._baseInterval=r,e.isNonterminal()&&Q(n===r),this._childWrappers=[]}_forgetMemoizedResultFor(e){delete this._node[this._semantics.attributeKeys[e]],this.children.forEach(n=>{n._forgetMemoizedResultFor(e)})}child(e){if(!(0<=e&&e<this._node.numChildren()))return;let n=this._childWrappers[e];if(!n){const r=this._node.childAt(e),s=this._node.childOffsets[e],i=this._baseInterval.subInterval(s,r.matchLength),o=r.isNonterminal()?i:this._baseInterval;n=this._childWrappers[e]=this._semantics.wrap(r,i,o)}return n}_children(){for(let e=0;e<this._node.numChildren();e++)this.child(e);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(e){const n=e||[],r=n.map(o=>o._node),s=new Ht(r,[],-1,!1),i=this._semantics.wrap(s,null,null);return i._childWrappers=n,i}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class B{constructor(e,n){const r=this;if(this.grammar=e,this.checkedActionDicts=!1,this.Wrapper=class extends(n?n.Wrapper:ht){constructor(s,i,o){super(s,i,o),r.checkActionDictsIfHaventAlready(),this._semantics=r}toString(){return"[semantics wrapper for "+r.grammar.name+"]"}},this.super=n,n){if(!(e.equals(this.super.grammar)||e._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+e.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const s in this.attributes)Object.defineProperty(this.attributeKeys,s,{value:mt(s)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let e;for(e in this.operations)this.operations[e].checkActionDict(this.grammar);for(e in this.attributes)this.attributes[e].checkActionDict(this.grammar)}toRecipe(e){function n(s){return s.super!==B.BuiltInSemantics._getSemantics()}let r=`(function(g) {
`;if(n(this)){r+="  var semantics = "+this.super.toRecipe(!0)+"(g";const s=this.super.grammar;let i=this.grammar;for(;i!==s;)r+=".superGrammar",i=i.superGrammar;r+=`);
`,r+="  return g.extendSemantics(semantics)"}else r+="  return g.createSemantics()";return["Operation","Attribute"].forEach(s=>{const i=this[s.toLowerCase()+"s"];Object.keys(i).forEach(o=>{const{actionDict:a,formals:l,builtInDefault:p}=i[o];let d=o;l.length>0&&(d+="("+l.join(", ")+")");let c;n(this)&&this.super[s.toLowerCase()+"s"][o]?c="extend"+s:c="add"+s,r+=`
    .`+c+"("+JSON.stringify(d)+", {";const u=[];Object.keys(a).forEach(h=>{if(a[h]!==p){let g=a[h].toString().trim();g=g.replace(/^.*\(/,"function("),u.push(`
      `+JSON.stringify(h)+": "+g)}}),r+=u.join(",")+`
    })`})}),r+=`;
  })`,e||(r=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+r+`(grammar);
  return semantics;
});
`),r}addOperationOrAttribute(e,n,r){const s=e+"s",i=ft(n,e),{name:o}=i,{formals:a}=i;this.assertNewName(o,e);const l=jr(e,o,c),p={_default:l};Object.keys(r).forEach(u=>{p[u]=r[u]});const d=e==="operation"?new ue(o,a,p,l):new Ue(o,p,l);d.checkActionDict(this.grammar),this[s][o]=d;function c(...u){const h=this._semantics[s][o];if(arguments.length!==h.formals.length)throw new Error("Invalid number of arguments passed to "+o+" "+e+" (expected "+h.formals.length+", got "+arguments.length+")");const g=Object.create(null);for(const[b,G]of Object.entries(u)){const H=h.formals[b];g[H]=G}const v=this.args;this.args=g;const I=h.execute(this._semantics,this);return this.args=v,I}e==="operation"?(this.Wrapper.prototype[o]=c,this.Wrapper.prototype[o].toString=function(){return"["+o+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,o,{get:c,configurable:!0}),Object.defineProperty(this.attributeKeys,o,{value:mt(o)}))}extendOperationOrAttribute(e,n,r){const s=e+"s";if(ft(n,"attribute"),!(this.super&&n in this.super[s]))throw new Error("Cannot extend "+e+" '"+n+"': did not inherit an "+e+" with that name");if(qe(this[s],n))throw new Error("Cannot extend "+e+" '"+n+"' again");const i=this[s][n].formals,o=this[s][n].actionDict,a=Object.create(o);Object.keys(r).forEach(l=>{a[l]=r[l]}),this[s][n]=e==="operation"?new ue(n,i,a):new Ue(n,a),this[s][n].checkActionDict(this.grammar)}assertNewName(e,n){if(qe(ht.prototype,e))throw new Error("Cannot add "+n+" '"+e+"': that's a reserved name");if(e in this.operations)throw new Error("Cannot add "+n+" '"+e+"': an operation with that name already exists");if(e in this.attributes)throw new Error("Cannot add "+n+" '"+e+"': an attribute with that name already exists")}wrap(e,n,r){const s=r||n;return e instanceof this.Wrapper?e:new this.Wrapper(e,n,s)}}function ft(t,e){if(!B.prototypeGrammar)return Q(t.indexOf("(")===-1),{name:t,formals:[]};const n=B.prototypeGrammar.match(t,e==="operation"?"OperationSignature":"AttributeSignature");if(n.failed())throw new Error(n.message);return B.prototypeGrammarSemantics(n).parse()}function jr(t,e,n){return function(...r){const i=(this._semantics.operations[e]||this._semantics.attributes[e]).formals.map(o=>this.args[o]);if(!this.isIteration()&&r.length===1)return n.apply(r[0],i);throw lr(this.ctorName,e,t,le)}}B.createSemantics=function(t,e){const n=new B(t,e!==void 0?e:B.BuiltInSemantics._getSemantics()),r=function(i){if(!(i instanceof zt))throw new TypeError("Semantics expected a MatchResult, but got "+Ft(i));if(i.failed())throw new TypeError("cannot apply Semantics to "+i.toString());const o=i._cst;if(o.grammar!==t)throw new Error("Cannot use a MatchResult from grammar '"+o.grammar.name+"' with a semantics for '"+t.name+"'");const a=new Ee(i.input);return n.wrap(o,a.interval(i._cstOffset,i.input.length))};return r.addOperation=function(s,i){return n.addOperationOrAttribute("operation",s,i),r},r.extendOperation=function(s,i){return n.extendOperationOrAttribute("operation",s,i),r},r.addAttribute=function(s,i){return n.addOperationOrAttribute("attribute",s,i),r},r.extendAttribute=function(s,i){return n.extendOperationOrAttribute("attribute",s,i),r},r._getActionDict=function(s){const i=n.operations[s]||n.attributes[s];if(!i)throw new Error('"'+s+'" is not a valid operation or attribute name in this semantics for "'+t.name+'"');return i.actionDict},r._remove=function(s){let i;return s in n.operations?(i=n.operations[s],delete n.operations[s]):s in n.attributes&&(i=n.attributes[s],delete n.attributes[s]),delete n.Wrapper.prototype[s],i},r.getOperationNames=function(){return Object.keys(n.operations)},r.getAttributeNames=function(){return Object.keys(n.attributes)},r.getGrammar=function(){return n.grammar},r.toRecipe=function(s){return n.toRecipe(s)},r.toString=n.toString.bind(n),r._getSemantics=function(){return n},r};class ue{constructor(e,n,r,s){this.name=e,this.formals=n,this.actionDict=r,this.builtInDefault=s}checkActionDict(e){e._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(e,n){try{const{ctorName:r}=n._node;let s=this.actionDict[r];return s?(le.push([this,r]),s.apply(n,n._children())):n.isNonterminal()&&(s=this.actionDict._nonterminal,s)?(le.push([this,"_nonterminal",r]),s.apply(n,n._children())):(le.push([this,"default action",r]),this.actionDict._default.apply(n,n._children()))}finally{le.pop()}}}ue.prototype.typeName="operation";class Ue extends ue{constructor(e,n,r){super(e,[],n,r)}execute(e,n){const r=n._node,s=e.attributeKeys[this.name];return qe(r,s)||(r[s]=ue.prototype.execute.call(this,e,n)),r[s]}}Ue.prototype.typeName="attribute";const gt=["_iter","_terminal","_nonterminal","_default"];function xt(t){return Object.keys(t.rules).sort().map(e=>t.rules[e])}const Or=t=>t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Vt,Yt;class F{constructor(e,n,r,s){if(this.name=e,this.superGrammar=n,this.rules=r,s){if(!(s in r))throw new Error("Invalid start rule: '"+s+"' is not a rule in grammar '"+e+"'");this.defaultStartRule=s}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Pr(this)}isBuiltIn(){return this===F.ProtoBuiltInRules||this===F.BuiltInRules}equals(e){if(this===e)return!0;if(e==null||this.name!==e.name||this.defaultStartRule!==e.defaultStartRule||!(this.superGrammar===e.superGrammar||this.superGrammar.equals(e.superGrammar)))return!1;const n=xt(this),r=xt(e);return n.length===r.length&&n.every((s,i)=>s.description===r[i].description&&s.formals.join(",")===r[i].formals.join(",")&&s.body.toString()===r[i].body.toString())}match(e,n){const r=this.matcher();return r.replaceInputRange(0,0,e),r.match(n)}trace(e,n){const r=this.matcher();return r.replaceInputRange(0,0,e),r.trace(n)}createSemantics(){return B.createSemantics(this)}extendSemantics(e){return B.createSemantics(this,e._getSemantics())}_checkTopDownActionDict(e,n,r){const s=[];for(const i in r){const o=r[i];if(!gt.includes(i)&&!(i in this.rules)){s.push(`'${i}' is not a valid semantic action for '${this.name}'`);continue}if(typeof o!="function"){s.push(`'${i}' must be a function in an action dictionary for '${this.name}'`);continue}const l=o.length,p=this._topDownActionArity(i);if(l!==p){let d;i==="_iter"||i==="_nonterminal"?d=`it should use a rest parameter, e.g. \`${i}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:d=`expected ${p}, got ${l}`,s.push(`Semantic action '${i}' has the wrong arity: ${d}`)}}if(s.length>0){const i=s.map(a=>"- "+a),o=new Error([`Found errors in the action dictionary of the '${n}' ${e}:`,...i].join(`
`));throw o.problems=s,o}}_topDownActionArity(e){return gt.includes(e)?0:this.rules[e].body.getArity()}_inheritsFrom(e){let n=this.superGrammar;for(;n;){if(n.equals(e,!0))return!0;n=n.superGrammar}return!1}toRecipe(e=void 0){const n={};this.source&&(n.source=this.source.contents);let r=null;this.defaultStartRule&&(r=this.defaultStartRule);const s={};Object.keys(this.rules).forEach(a=>{const l=this.rules[a],{body:p}=l,d=!this.superGrammar||!this.superGrammar.rules[a];let c;d?c="define":c=p instanceof Ie?"extend":"override";const u={};if(l.source&&this.source){const v=l.source.relativeTo(this.source);u.sourceInterval=[v.startIdx,v.endIdx]}const h=d?l.description:null,g=p.outputRecipe(l.formals,this.source);s[a]=[c,u,h,l.formals,g]});let i="null";e?i=e:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(i=this.superGrammar.toRecipe());const o=[...["grammar",n,this.name].map(JSON.stringify),i,...[r,s].map(JSON.stringify)];return Or(`[${o.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const e=new ee;e.append("{");let n=!0;for(const r in this.rules){const{body:s}=this.rules[r];n?n=!1:e.append(","),e.append(`
`),e.append("  "),this.addSemanticActionTemplate(r,s,e)}return e.append(`
}`),e.contents()}addSemanticActionTemplate(e,n,r){r.append(e),r.append(": function(");const s=this._topDownActionArity(e);r.append(ve("_",s).join(", ")),r.append(`) {
`),r.append("  }")}parseApplication(e){let n;if(e.indexOf("<")===-1)n=new S(e);else{const s=Vt.match(e,"Base_application");n=Yt(s,{})}if(!(n.ruleName in this.rules))throw Mt(n.ruleName,this.name);const{formals:r}=this.rules[n.ruleName];if(r.length!==n.args.length){const{source:s}=this.rules[n.ruleName];throw Bt(n.ruleName,r.length,n.args.length,s)}return n}_setUpMatchState(e){this._matchStateInitializer&&this._matchStateInitializer(e)}}F.ProtoBuiltInRules=new F("ProtoBuiltInRules",void 0,{any:{body:J,formals:[],description:"any character",primitive:!0},end:{body:$,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Qe(new R(0)),formals:["str"],primitive:!0},lower:{body:new O("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new O("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new O("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new te(new S("space")),formals:[]},space:{body:new k("\0"," "),formals:[],description:"a space"}});F.initApplicationParser=function(t,e){Vt=t,Yt=e};class yt{constructor(e){this.name=e}sourceInterval(e,n){return this.source.subInterval(e,n-e)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?F.ProtoBuiltInRules:F.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(e,n){const r=this.ensureSuperGrammar().rules[e];if(!r)throw Qn(e,this.superGrammar.name,n);return r}installOverriddenOrExtendedRule(e,n,r,s){const i=Fe(n);if(i.length>0)throw ct(e,i,s);const o=this.ensureSuperGrammar().rules[e],a=o.formals,l=a?a.length:0;if(n.length!==l)throw Bt(e,l,n.length,s);return this.install(e,n,r,o.description,s)}install(e,n,r,s,i,o=!1){return this.rules[e]={body:r.introduceParams(n),formals:n,description:s,source:i,primitive:o},this}withSuperGrammar(e){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=e,this.rules=Object.create(e.rules),e.isBuiltIn()||(this.defaultStartRule=e.defaultStartRule),this}withDefaultStartRule(e){return this.defaultStartRule=e,this}withSource(e){return this.source=new Ee(e).interval(0,e.length),this}build(){const e=new F(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);e._matchStateInitializer=e.superGrammar._matchStateInitializer,e.supportsIncrementalParsing=e.superGrammar.supportsIncrementalParsing;const n=[];let r=!1;return Object.keys(e.rules).forEach(s=>{const{body:i}=e.rules[s];try{i.assertChoicesHaveUniformArity(s)}catch(o){n.push(o)}try{i.assertAllApplicationsAreValid(s,e)}catch(o){n.push(o),r=!0}}),r||Object.keys(e.rules).forEach(s=>{const{body:i}=e.rules[s];try{i.assertIteratedExprsAreNotNullable(e,[])}catch(o){n.push(o)}}),n.length>0&&cr(n),this.source&&(e.source=this.source),e}define(e,n,r,s,i,o){if(this.ensureSuperGrammar(),this.superGrammar.rules[e])throw lt(e,this.name,this.superGrammar.name,i);if(this.rules[e])throw lt(e,this.name,this.name,i);const a=Fe(n);if(a.length>0)throw ct(e,a,i);return this.install(e,n,r,s,i,o)}override(e,n,r,s,i){return this.ensureSuperGrammarRuleForOverriding(e,i),this.installOverriddenOrExtendedRule(e,n,r,i),this}extend(e,n,r,s,i){if(!this.ensureSuperGrammar().rules[e])throw Xn(e,this.superGrammar.name,i);const a=new Ie(this.superGrammar,e,r);return a.source=r.source,this.installOverriddenOrExtendedRule(e,n,a,i),this}}class _e{constructor(e){this.currentDecl=null,this.currentRuleName=null,this.options=e||{}}newGrammar(e){return new yt(e)}grammar(e,n,r,s,i){const o=new yt(n);return r&&o.withSuperGrammar(r instanceof F?r:this.fromRecipe(r)),s&&o.withDefaultStartRule(s),e&&e.source&&o.withSource(e.source),this.currentDecl=o,Object.keys(i).forEach(a=>{this.currentRuleName=a;const l=i[a],p=l[0],d=l[1],c=l[2],u=l[3],h=this.fromRecipe(l[4]);let g;o.source&&d&&d.sourceInterval&&(g=o.source.subInterval(d.sourceInterval[0],d.sourceInterval[1]-d.sourceInterval[0])),o[p](a,u,h,c,g)}),this.currentRuleName=this.currentDecl=null,o.build()}terminal(e){return new L(e)}range(e,n){return new k(e,n)}param(e){return new R(e)}alt(...e){let n=[];for(let r of e)r instanceof x||(r=this.fromRecipe(r)),r instanceof A?n=n.concat(r.terms):n.push(r);return n.length===1?n[0]:new A(n)}seq(...e){let n=[];for(let r of e)r instanceof x||(r=this.fromRecipe(r)),r instanceof P?n=n.concat(r.factors):n.push(r);return n.length===1?n[0]:new P(n)}star(e){return e instanceof x||(e=this.fromRecipe(e)),new te(e)}plus(e){return e instanceof x||(e=this.fromRecipe(e)),new oe(e)}opt(e){return e instanceof x||(e=this.fromRecipe(e)),new V(e)}not(e){return e instanceof x||(e=this.fromRecipe(e)),new j(e)}lookahead(e){return e instanceof x||(e=this.fromRecipe(e)),this.options.eliminateLookaheads?new j(new j(e)):new M(e)}lex(e){return e instanceof x||(e=this.fromRecipe(e)),new q(e)}app(e,n){return n&&n.length>0&&(n=n.map(function(r){return r instanceof x?r:this.fromRecipe(r)},this)),new S(e,n)}splice(e,n){return new be(this.currentDecl.superGrammar,this.currentRuleName,e.map(r=>this.fromRecipe(r)),n.map(r=>this.fromRecipe(r)))}fromRecipe(e){const n=e[0]==="grammar"?e.slice(1):e.slice(2),r=this[e[0]](...n),s=e[1];return s&&s.sourceInterval&&this.currentDecl&&r.withSource(this.currentDecl.sourceInterval(...s.sourceInterval)),r}}function Xe(t){return typeof t=="function"?t.call(new _e):(typeof t=="string"&&(t=JSON.parse(t)),new _e().fromRecipe(t))}const Ze=Xe(["grammar",{source:`BuiltInRules {

  alnum  (an alpha-numeric character)
    = letter
    | digit

  letter  (a letter)
    = lower
    | upper
    | unicodeLtmo

  digit  (a digit)
    = "0".."9"

  hexDigit  (a hexadecimal digit)
    = digit
    | "a".."f"
    | "A".."F"

  ListOf<elem, sep>
    = NonemptyListOf<elem, sep>
    | EmptyListOf<elem, sep>

  NonemptyListOf<elem, sep>
    = elem (sep elem)*

  EmptyListOf<elem, sep>
    = /* nothing */

  listOf<elem, sep>
    = nonemptyListOf<elem, sep>
    | emptyListOf<elem, sep>

  nonemptyListOf<elem, sep>
    = elem (sep elem)*

  emptyListOf<elem, sep>
    = /* nothing */

  // Allows a syntactic rule application within a lexical context.
  applySyntactic<app> = app
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);F.BuiltInRules=Ze;mr(F.BuiltInRules);const et=Xe(["grammar",{source:`Ohm {

  Grammars
    = Grammar*

  Grammar
    = ident SuperGrammar? "{" Rule* "}"

  SuperGrammar
    = "<:" ident

  Rule
    = ident Formals? ruleDescr? "="  RuleBody  -- define
    | ident Formals?            ":=" OverrideRuleBody  -- override
    | ident Formals?            "+=" RuleBody  -- extend

  RuleBody
    = "|"? NonemptyListOf<TopLevelTerm, "|">

  TopLevelTerm
    = Seq caseName  -- inline
    | Seq

  OverrideRuleBody
    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">

  OverrideTopLevelTerm
    = "..."  -- superSplice
    | TopLevelTerm

  Formals
    = "<" ListOf<ident, ","> ">"

  Params
    = "<" ListOf<Seq, ","> ">"

  Alt
    = NonemptyListOf<Seq, "|">

  Seq
    = Iter*

  Iter
    = Pred "*"  -- star
    | Pred "+"  -- plus
    | Pred "?"  -- opt
    | Pred

  Pred
    = "~" Lex  -- not
    | "&" Lex  -- lookahead
    | Lex

  Lex
    = "#" Base  -- lex
    | Base

  Base
    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application
    | oneCharTerminal ".." oneCharTerminal           -- range
    | terminal                                       -- terminal
    | "(" Alt ")"                                    -- paren

  ruleDescr  (a rule description)
    = "(" ruleDescrText ")"

  ruleDescrText
    = (~")" any)*

  caseName
    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

  ident  (an identifier)
    = name

  terminal
    = "\\"" terminalChar* "\\""

  oneCharTerminal
    = "\\"" terminalChar "\\""

  terminalChar
    = escapeChar
      | ~"\\\\" ~"\\"" ~"\\n" "\\u{0}".."\\u{10FFFF}"

  escapeChar  (an escape sequence)
    = "\\\\\\\\"                                     -- backslash
    | "\\\\\\""                                     -- doubleQuote
    | "\\\\\\'"                                     -- singleQuote
    | "\\\\b"                                      -- backspace
    | "\\\\n"                                      -- lineFeed
    | "\\\\r"                                      -- carriageReturn
    | "\\\\t"                                      -- tab
    | "\\\\u{" hexDigit hexDigit? hexDigit?
             hexDigit? hexDigit? hexDigit? "}"   -- unicodeCodePoint
    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape
    | "\\\\x" hexDigit hexDigit                    -- hexEscape

  space
   += comment

  comment
    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
    | "/*" (~"*/" any)* "*/"  -- multiLine

  tokens = token*

  token = caseName | comment | ident | operator | punctuation | terminal | any

  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"

  punctuation = "<" | ">" | "," | "--"
}`},"Ohm",null,"Grammars",{Grammars:["define",{sourceInterval:[9,32]},null,[],["star",{sourceInterval:[24,32]},["app",{sourceInterval:[24,31]},"Grammar",[]]]],Grammar:["define",{sourceInterval:[36,83]},null,[],["seq",{sourceInterval:[50,83]},["app",{sourceInterval:[50,55]},"ident",[]],["opt",{sourceInterval:[56,69]},["app",{sourceInterval:[56,68]},"SuperGrammar",[]]],["terminal",{sourceInterval:[70,73]},"{"],["star",{sourceInterval:[74,79]},["app",{sourceInterval:[74,78]},"Rule",[]]],["terminal",{sourceInterval:[80,83]},"}"]]],SuperGrammar:["define",{sourceInterval:[87,116]},null,[],["seq",{sourceInterval:[106,116]},["terminal",{sourceInterval:[106,110]},"<:"],["app",{sourceInterval:[111,116]},"ident",[]]]],Rule_define:["define",{sourceInterval:[131,181]},null,[],["seq",{sourceInterval:[131,170]},["app",{sourceInterval:[131,136]},"ident",[]],["opt",{sourceInterval:[137,145]},["app",{sourceInterval:[137,144]},"Formals",[]]],["opt",{sourceInterval:[146,156]},["app",{sourceInterval:[146,155]},"ruleDescr",[]]],["terminal",{sourceInterval:[157,160]},"="],["app",{sourceInterval:[162,170]},"RuleBody",[]]]],Rule_override:["define",{sourceInterval:[188,248]},null,[],["seq",{sourceInterval:[188,235]},["app",{sourceInterval:[188,193]},"ident",[]],["opt",{sourceInterval:[194,202]},["app",{sourceInterval:[194,201]},"Formals",[]]],["terminal",{sourceInterval:[214,218]},":="],["app",{sourceInterval:[219,235]},"OverrideRuleBody",[]]]],Rule_extend:["define",{sourceInterval:[255,305]},null,[],["seq",{sourceInterval:[255,294]},["app",{sourceInterval:[255,260]},"ident",[]],["opt",{sourceInterval:[261,269]},["app",{sourceInterval:[261,268]},"Formals",[]]],["terminal",{sourceInterval:[281,285]},"+="],["app",{sourceInterval:[286,294]},"RuleBody",[]]]],Rule:["define",{sourceInterval:[120,305]},null,[],["alt",{sourceInterval:[131,305]},["app",{sourceInterval:[131,170]},"Rule_define",[]],["app",{sourceInterval:[188,235]},"Rule_override",[]],["app",{sourceInterval:[255,294]},"Rule_extend",[]]]],RuleBody:["define",{sourceInterval:[309,362]},null,[],["seq",{sourceInterval:[324,362]},["opt",{sourceInterval:[324,328]},["terminal",{sourceInterval:[324,327]},"|"]],["app",{sourceInterval:[329,362]},"NonemptyListOf",[["app",{sourceInterval:[344,356]},"TopLevelTerm",[]],["terminal",{sourceInterval:[358,361]},"|"]]]]],TopLevelTerm_inline:["define",{sourceInterval:[385,408]},null,[],["seq",{sourceInterval:[385,397]},["app",{sourceInterval:[385,388]},"Seq",[]],["app",{sourceInterval:[389,397]},"caseName",[]]]],TopLevelTerm:["define",{sourceInterval:[366,418]},null,[],["alt",{sourceInterval:[385,418]},["app",{sourceInterval:[385,397]},"TopLevelTerm_inline",[]],["app",{sourceInterval:[415,418]},"Seq",[]]]],OverrideRuleBody:["define",{sourceInterval:[422,491]},null,[],["seq",{sourceInterval:[445,491]},["opt",{sourceInterval:[445,449]},["terminal",{sourceInterval:[445,448]},"|"]],["app",{sourceInterval:[450,491]},"NonemptyListOf",[["app",{sourceInterval:[465,485]},"OverrideTopLevelTerm",[]],["terminal",{sourceInterval:[487,490]},"|"]]]]],OverrideTopLevelTerm_superSplice:["define",{sourceInterval:[522,543]},null,[],["terminal",{sourceInterval:[522,527]},"..."]],OverrideTopLevelTerm:["define",{sourceInterval:[495,562]},null,[],["alt",{sourceInterval:[522,562]},["app",{sourceInterval:[522,527]},"OverrideTopLevelTerm_superSplice",[]],["app",{sourceInterval:[550,562]},"TopLevelTerm",[]]]],Formals:["define",{sourceInterval:[566,606]},null,[],["seq",{sourceInterval:[580,606]},["terminal",{sourceInterval:[580,583]},"<"],["app",{sourceInterval:[584,602]},"ListOf",[["app",{sourceInterval:[591,596]},"ident",[]],["terminal",{sourceInterval:[598,601]},","]]],["terminal",{sourceInterval:[603,606]},">"]]],Params:["define",{sourceInterval:[610,647]},null,[],["seq",{sourceInterval:[623,647]},["terminal",{sourceInterval:[623,626]},"<"],["app",{sourceInterval:[627,643]},"ListOf",[["app",{sourceInterval:[634,637]},"Seq",[]],["terminal",{sourceInterval:[639,642]},","]]],["terminal",{sourceInterval:[644,647]},">"]]],Alt:["define",{sourceInterval:[651,685]},null,[],["app",{sourceInterval:[661,685]},"NonemptyListOf",[["app",{sourceInterval:[676,679]},"Seq",[]],["terminal",{sourceInterval:[681,684]},"|"]]]],Seq:["define",{sourceInterval:[689,704]},null,[],["star",{sourceInterval:[699,704]},["app",{sourceInterval:[699,703]},"Iter",[]]]],Iter_star:["define",{sourceInterval:[719,736]},null,[],["seq",{sourceInterval:[719,727]},["app",{sourceInterval:[719,723]},"Pred",[]],["terminal",{sourceInterval:[724,727]},"*"]]],Iter_plus:["define",{sourceInterval:[743,760]},null,[],["seq",{sourceInterval:[743,751]},["app",{sourceInterval:[743,747]},"Pred",[]],["terminal",{sourceInterval:[748,751]},"+"]]],Iter_opt:["define",{sourceInterval:[767,783]},null,[],["seq",{sourceInterval:[767,775]},["app",{sourceInterval:[767,771]},"Pred",[]],["terminal",{sourceInterval:[772,775]},"?"]]],Iter:["define",{sourceInterval:[708,794]},null,[],["alt",{sourceInterval:[719,794]},["app",{sourceInterval:[719,727]},"Iter_star",[]],["app",{sourceInterval:[743,751]},"Iter_plus",[]],["app",{sourceInterval:[767,775]},"Iter_opt",[]],["app",{sourceInterval:[790,794]},"Pred",[]]]],Pred_not:["define",{sourceInterval:[809,824]},null,[],["seq",{sourceInterval:[809,816]},["terminal",{sourceInterval:[809,812]},"~"],["app",{sourceInterval:[813,816]},"Lex",[]]]],Pred_lookahead:["define",{sourceInterval:[831,852]},null,[],["seq",{sourceInterval:[831,838]},["terminal",{sourceInterval:[831,834]},"&"],["app",{sourceInterval:[835,838]},"Lex",[]]]],Pred:["define",{sourceInterval:[798,862]},null,[],["alt",{sourceInterval:[809,862]},["app",{sourceInterval:[809,816]},"Pred_not",[]],["app",{sourceInterval:[831,838]},"Pred_lookahead",[]],["app",{sourceInterval:[859,862]},"Lex",[]]]],Lex_lex:["define",{sourceInterval:[876,892]},null,[],["seq",{sourceInterval:[876,884]},["terminal",{sourceInterval:[876,879]},"#"],["app",{sourceInterval:[880,884]},"Base",[]]]],Lex:["define",{sourceInterval:[866,903]},null,[],["alt",{sourceInterval:[876,903]},["app",{sourceInterval:[876,884]},"Lex_lex",[]],["app",{sourceInterval:[899,903]},"Base",[]]]],Base_application:["define",{sourceInterval:[918,979]},null,[],["seq",{sourceInterval:[918,963]},["app",{sourceInterval:[918,923]},"ident",[]],["opt",{sourceInterval:[924,931]},["app",{sourceInterval:[924,930]},"Params",[]]],["not",{sourceInterval:[932,963]},["alt",{sourceInterval:[934,962]},["seq",{sourceInterval:[934,948]},["opt",{sourceInterval:[934,944]},["app",{sourceInterval:[934,943]},"ruleDescr",[]]],["terminal",{sourceInterval:[945,948]},"="]],["terminal",{sourceInterval:[951,955]},":="],["terminal",{sourceInterval:[958,962]},"+="]]]]],Base_range:["define",{sourceInterval:[986,1041]},null,[],["seq",{sourceInterval:[986,1022]},["app",{sourceInterval:[986,1001]},"oneCharTerminal",[]],["terminal",{sourceInterval:[1002,1006]},".."],["app",{sourceInterval:[1007,1022]},"oneCharTerminal",[]]]],Base_terminal:["define",{sourceInterval:[1048,1106]},null,[],["app",{sourceInterval:[1048,1056]},"terminal",[]]],Base_paren:["define",{sourceInterval:[1113,1168]},null,[],["seq",{sourceInterval:[1113,1124]},["terminal",{sourceInterval:[1113,1116]},"("],["app",{sourceInterval:[1117,1120]},"Alt",[]],["terminal",{sourceInterval:[1121,1124]},")"]]],Base:["define",{sourceInterval:[907,1168]},null,[],["alt",{sourceInterval:[918,1168]},["app",{sourceInterval:[918,963]},"Base_application",[]],["app",{sourceInterval:[986,1022]},"Base_range",[]],["app",{sourceInterval:[1048,1056]},"Base_terminal",[]],["app",{sourceInterval:[1113,1124]},"Base_paren",[]]]],ruleDescr:["define",{sourceInterval:[1172,1231]},"a rule description",[],["seq",{sourceInterval:[1210,1231]},["terminal",{sourceInterval:[1210,1213]},"("],["app",{sourceInterval:[1214,1227]},"ruleDescrText",[]],["terminal",{sourceInterval:[1228,1231]},")"]]],ruleDescrText:["define",{sourceInterval:[1235,1266]},null,[],["star",{sourceInterval:[1255,1266]},["seq",{sourceInterval:[1256,1264]},["not",{sourceInterval:[1256,1260]},["terminal",{sourceInterval:[1257,1260]},")"]],["app",{sourceInterval:[1261,1264]},"any",[]]]]],caseName:["define",{sourceInterval:[1270,1338]},null,[],["seq",{sourceInterval:[1285,1338]},["terminal",{sourceInterval:[1285,1289]},"--"],["star",{sourceInterval:[1290,1304]},["seq",{sourceInterval:[1291,1302]},["not",{sourceInterval:[1291,1296]},["terminal",{sourceInterval:[1292,1296]},`
`]],["app",{sourceInterval:[1297,1302]},"space",[]]]],["app",{sourceInterval:[1305,1309]},"name",[]],["star",{sourceInterval:[1310,1324]},["seq",{sourceInterval:[1311,1322]},["not",{sourceInterval:[1311,1316]},["terminal",{sourceInterval:[1312,1316]},`
`]],["app",{sourceInterval:[1317,1322]},"space",[]]]],["alt",{sourceInterval:[1326,1337]},["terminal",{sourceInterval:[1326,1330]},`
`],["lookahead",{sourceInterval:[1333,1337]},["terminal",{sourceInterval:[1334,1337]},"}"]]]]],name:["define",{sourceInterval:[1342,1382]},"a name",[],["seq",{sourceInterval:[1363,1382]},["app",{sourceInterval:[1363,1372]},"nameFirst",[]],["star",{sourceInterval:[1373,1382]},["app",{sourceInterval:[1373,1381]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[1386,1418]},null,[],["alt",{sourceInterval:[1402,1418]},["terminal",{sourceInterval:[1402,1405]},"_"],["app",{sourceInterval:[1412,1418]},"letter",[]]]],nameRest:["define",{sourceInterval:[1422,1452]},null,[],["alt",{sourceInterval:[1437,1452]},["terminal",{sourceInterval:[1437,1440]},"_"],["app",{sourceInterval:[1447,1452]},"alnum",[]]]],ident:["define",{sourceInterval:[1456,1489]},"an identifier",[],["app",{sourceInterval:[1485,1489]},"name",[]]],terminal:["define",{sourceInterval:[1493,1531]},null,[],["seq",{sourceInterval:[1508,1531]},["terminal",{sourceInterval:[1508,1512]},'"'],["star",{sourceInterval:[1513,1526]},["app",{sourceInterval:[1513,1525]},"terminalChar",[]]],["terminal",{sourceInterval:[1527,1531]},'"']]],oneCharTerminal:["define",{sourceInterval:[1535,1579]},null,[],["seq",{sourceInterval:[1557,1579]},["terminal",{sourceInterval:[1557,1561]},'"'],["app",{sourceInterval:[1562,1574]},"terminalChar",[]],["terminal",{sourceInterval:[1575,1579]},'"']]],terminalChar:["define",{sourceInterval:[1583,1660]},null,[],["alt",{sourceInterval:[1602,1660]},["app",{sourceInterval:[1602,1612]},"escapeChar",[]],["seq",{sourceInterval:[1621,1660]},["not",{sourceInterval:[1621,1626]},["terminal",{sourceInterval:[1622,1626]},"\\"]],["not",{sourceInterval:[1627,1632]},["terminal",{sourceInterval:[1628,1632]},'"']],["not",{sourceInterval:[1633,1638]},["terminal",{sourceInterval:[1634,1638]},`
`]],["range",{sourceInterval:[1639,1660]},"\0","􏿿"]]]],escapeChar_backslash:["define",{sourceInterval:[1703,1758]},null,[],["terminal",{sourceInterval:[1703,1709]},"\\\\"]],escapeChar_doubleQuote:["define",{sourceInterval:[1765,1822]},null,[],["terminal",{sourceInterval:[1765,1771]},'\\"']],escapeChar_singleQuote:["define",{sourceInterval:[1829,1886]},null,[],["terminal",{sourceInterval:[1829,1835]},"\\'"]],escapeChar_backspace:["define",{sourceInterval:[1893,1948]},null,[],["terminal",{sourceInterval:[1893,1898]},"\\b"]],escapeChar_lineFeed:["define",{sourceInterval:[1955,2009]},null,[],["terminal",{sourceInterval:[1955,1960]},"\\n"]],escapeChar_carriageReturn:["define",{sourceInterval:[2016,2076]},null,[],["terminal",{sourceInterval:[2016,2021]},"\\r"]],escapeChar_tab:["define",{sourceInterval:[2083,2132]},null,[],["terminal",{sourceInterval:[2083,2088]},"\\t"]],escapeChar_unicodeCodePoint:["define",{sourceInterval:[2139,2243]},null,[],["seq",{sourceInterval:[2139,2221]},["terminal",{sourceInterval:[2139,2145]},"\\u{"],["app",{sourceInterval:[2146,2154]},"hexDigit",[]],["opt",{sourceInterval:[2155,2164]},["app",{sourceInterval:[2155,2163]},"hexDigit",[]]],["opt",{sourceInterval:[2165,2174]},["app",{sourceInterval:[2165,2173]},"hexDigit",[]]],["opt",{sourceInterval:[2188,2197]},["app",{sourceInterval:[2188,2196]},"hexDigit",[]]],["opt",{sourceInterval:[2198,2207]},["app",{sourceInterval:[2198,2206]},"hexDigit",[]]],["opt",{sourceInterval:[2208,2217]},["app",{sourceInterval:[2208,2216]},"hexDigit",[]]],["terminal",{sourceInterval:[2218,2221]},"}"]]],escapeChar_unicodeEscape:["define",{sourceInterval:[2250,2309]},null,[],["seq",{sourceInterval:[2250,2291]},["terminal",{sourceInterval:[2250,2255]},"\\u"],["app",{sourceInterval:[2256,2264]},"hexDigit",[]],["app",{sourceInterval:[2265,2273]},"hexDigit",[]],["app",{sourceInterval:[2274,2282]},"hexDigit",[]],["app",{sourceInterval:[2283,2291]},"hexDigit",[]]]],escapeChar_hexEscape:["define",{sourceInterval:[2316,2371]},null,[],["seq",{sourceInterval:[2316,2339]},["terminal",{sourceInterval:[2316,2321]},"\\x"],["app",{sourceInterval:[2322,2330]},"hexDigit",[]],["app",{sourceInterval:[2331,2339]},"hexDigit",[]]]],escapeChar:["define",{sourceInterval:[1664,2371]},"an escape sequence",[],["alt",{sourceInterval:[1703,2371]},["app",{sourceInterval:[1703,1709]},"escapeChar_backslash",[]],["app",{sourceInterval:[1765,1771]},"escapeChar_doubleQuote",[]],["app",{sourceInterval:[1829,1835]},"escapeChar_singleQuote",[]],["app",{sourceInterval:[1893,1898]},"escapeChar_backspace",[]],["app",{sourceInterval:[1955,1960]},"escapeChar_lineFeed",[]],["app",{sourceInterval:[2016,2021]},"escapeChar_carriageReturn",[]],["app",{sourceInterval:[2083,2088]},"escapeChar_tab",[]],["app",{sourceInterval:[2139,2221]},"escapeChar_unicodeCodePoint",[]],["app",{sourceInterval:[2250,2291]},"escapeChar_unicodeEscape",[]],["app",{sourceInterval:[2316,2339]},"escapeChar_hexEscape",[]]]],space:["extend",{sourceInterval:[2375,2394]},null,[],["app",{sourceInterval:[2387,2394]},"comment",[]]],comment_singleLine:["define",{sourceInterval:[2412,2458]},null,[],["seq",{sourceInterval:[2412,2443]},["terminal",{sourceInterval:[2412,2416]},"//"],["star",{sourceInterval:[2417,2429]},["seq",{sourceInterval:[2418,2427]},["not",{sourceInterval:[2418,2423]},["terminal",{sourceInterval:[2419,2423]},`
`]],["app",{sourceInterval:[2424,2427]},"any",[]]]],["lookahead",{sourceInterval:[2430,2443]},["alt",{sourceInterval:[2432,2442]},["terminal",{sourceInterval:[2432,2436]},`
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]),Pe=Object.create(x.prototype);function St(t,e){for(const n in t)if(n===e)return!0;return!1}function Qt(t,e,n,r){const s=new _e(r);let i,o,a,l=!1;return(n||et).createSemantics().addOperation("visit",{Grammars(c){return c.children.map(u=>u.visit())},Grammar(c,u,h,g,v){const I=c.visit();i=s.newGrammar(I),u.child(0)&&u.child(0).visit(),g.children.map(G=>G.visit());const b=i.build();if(b.source=this.source.trimmed(),St(e,I))throw Vn(b);return e[I]=b,b},SuperGrammar(c,u){const h=u.visit();if(h==="null")i.withSuperGrammar(null);else{if(!e||!St(e,h))throw Wn(h,e,u.source);i.withSuperGrammar(e[h])}},Rule_define(c,u,h,g,v){o=c.visit(),a=u.children.map(H=>H.visit())[0]||[],!i.defaultStartRule&&i.ensureSuperGrammar()!==F.ProtoBuiltInRules&&i.withDefaultStartRule(o);const I=v.visit(),b=h.children.map(H=>H.visit())[0],G=this.source.trimmed();return i.define(o,a,I,b,G)},Rule_override(c,u,h,g){o=c.visit(),a=u.children.map(b=>b.visit())[0]||[];const v=this.source.trimmed();i.ensureSuperGrammarRuleForOverriding(o,v),l=!0;const I=g.visit();return l=!1,i.override(o,a,I,null,v)},Rule_extend(c,u,h,g){o=c.visit(),a=u.children.map(b=>b.visit())[0]||[];const v=g.visit(),I=this.source.trimmed();return i.extend(o,a,v,null,I)},RuleBody(c,u){return s.alt(...u.visit()).withSource(this.source)},OverrideRuleBody(c,u){const h=u.visit(),g=h.indexOf(Pe);if(g>=0){const v=h.slice(0,g),I=h.slice(g+1);return I.forEach(b=>{if(b===Pe)throw ir(b)}),new be(i.superGrammar,o,v,I).withSource(this.source)}else return s.alt(...h).withSource(this.source)},Formals(c,u,h){return u.visit()},Params(c,u,h){return u.visit()},Alt(c){return s.alt(...c.visit()).withSource(this.source)},TopLevelTerm_inline(c,u){const h=o+"_"+u.visit(),g=c.visit(),v=this.source.trimmed(),I=!(i.superGrammar&&i.superGrammar.rules[h]);l&&!I?i.override(h,a,g,null,v):i.define(h,a,g,null,v);const b=a.map(G=>s.app(G));return s.app(h,b).withSource(g.source)},OverrideTopLevelTerm_superSplice(c){return Pe},Seq(c){return s.seq(...c.children.map(u=>u.visit())).withSource(this.source)},Iter_star(c,u){return s.star(c.visit()).withSource(this.source)},Iter_plus(c,u){return s.plus(c.visit()).withSource(this.source)},Iter_opt(c,u){return s.opt(c.visit()).withSource(this.source)},Pred_not(c,u){return s.not(u.visit()).withSource(this.source)},Pred_lookahead(c,u){return s.lookahead(u.visit()).withSource(this.source)},Lex_lex(c,u){return s.lex(u.visit()).withSource(this.source)},Base_application(c,u){const h=u.children.map(g=>g.visit())[0]||[];return s.app(c.visit(),h).withSource(this.source)},Base_range(c,u,h){return s.range(c.visit(),h.visit()).withSource(this.source)},Base_terminal(c){return s.terminal(c.visit()).withSource(this.source)},Base_paren(c,u,h){return u.visit()},ruleDescr(c,u,h){return u.visit()},ruleDescrText(c){return this.sourceString.trim()},caseName(c,u,h,g,v){return h.visit()},name(c,u){return this.sourceString},nameFirst(c){},nameRest(c){},terminal(c,u,h){return u.children.map(g=>g.visit()).join("")},oneCharTerminal(c,u,h){return u.visit()},escapeChar(c){try{return Rt(this.sourceString)}catch(u){throw u instanceof RangeError&&u.message.startsWith("Invalid code point ")?or(c):u}},NonemptyListOf(c,u,h){return[c.visit()].concat(h.children.map(g=>g.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(t).visit()}const Lr=Xe(["grammar",{source:`OperationsAndAttributes {

  AttributeSignature =
    name

  OperationSignature =
    name Formals?

  Formals
    = "(" ListOf<name, ","> ")"

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Nr(F.BuiltInRules);Jr(Lr);function Nr(t){const e={empty(){return this.iteration()},nonEmpty(n,r,s){return this.iteration([n].concat(s.children))},self(...n){return this}};B.BuiltInSemantics=B.createSemantics(t,null).addOperation("asIteration",{emptyListOf:e.empty,nonemptyListOf:e.nonEmpty,EmptyListOf:e.empty,NonemptyListOf:e.nonEmpty,_iter:e.self})}function Jr(t){B.prototypeGrammarSemantics=t.createSemantics().addOperation("parse",{AttributeSignature(e){return{name:e.parse(),formals:[]}},OperationSignature(e,n){return{name:e.parse(),formals:n.children.map(r=>r.parse())[0]||[]}},Formals(e,n,r){return n.asIteration().children.map(s=>s.parse())},name(e,n){return this.sourceString}}),B.prototypeGrammar=t}function $r(t){let e=0;const n=[0],r=()=>n[n.length-1],s={},i=/( *).*(?:$|\r?\n|\r)/g;let o;for(;(o=i.exec(t))!=null;){const[a,l]=o;if(a.length===0)break;const p=l.length,d=r(),c=e+p;if(p>d)n.push(p),s[c]=1;else if(p<d){const u=n.length;for(;r()!==p;)n.pop();s[c]=-1*(u-n.length)}e+=a.length}return n.length>1&&(s[e]=1-n.length),s}const Xt="an indented block",Zt="a dedent",_t=1114112;class kr extends Ee{constructor(e){super(e.input),this.state=e}_indentationAt(e){return this.state.userData[e]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),_t):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),_t):super.nextCodePoint()}}class vt extends x{constructor(e=!0){super(),this.isIndent=e}allowsSkippingPrecedingSpace(){return!0}eval(e){const{inputStream:n}=e,r=e.userData;e.doNotMemoize=!0;const s=n.pos,i=this.isIndent?1:-1;return(r[s]||0)*i>0?(e.userData=Object.create(r),e.userData[s]-=i,e.pushBinding(new ne(0),s),!0):(e.processFailure(s,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(e,n){}_isNullable(e,n){return!1}assertChoicesHaveUniformArity(e){}assertIteratedExprsAreNotNullable(e){}introduceParams(e){return this}substituteParams(e){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(e){const n=this.isIndent?Xt:Zt;return new U(this,n,"description")}}const Rr=new S("indent"),Fr=new S("dedent"),Dr=new be(Ze,"any",[Rr,Fr],[]),Tr=new _e().newGrammar("IndentationSensitive").withSuperGrammar(Ze).define("indent",[],new vt(!0),Xt,void 0,!0).define("dedent",[],new vt(!1),Zt,void 0,!0).extend("any",[],Dr,"any character",void 0).build();Object.assign(Tr,{_matchStateInitializer(t){t.userData=$r(t.input),t.inputStream=new kr(t)},supportsIncrementalParsing:!1});F.initApplicationParser(et,Qt);function Mr(t,e,n){const r=et.match(t,"Grammars");if(r.failed())throw Hn(r);return Qt(r,e,void 0,n)}function Br(t,e,n){const r=qr(t,e,n),s=Object.keys(r);if(s.length===0)throw new Error("Missing grammar definition");if(s.length>1){const o=r[s[1]].source;throw new Error(We(o.sourceString,o.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return r[s[0]]}function qr(t,e,n){const r=Object.create({});return Mr(t,r,n),r}function Ur(t,e){return Br(t,e)}const Gr=`JavaScripto {
  Program = Statement*

  Statement = ImportStatement
            | ExportStatement
            | VariableDeclaration
            | ClassDeclaration
            | IfStatement
            | WhileStatement
            | ForStatement
            | SwitchStatement
            | TryStatement
            | FunctionDeclaration
            | ReturnStatement
            | BreakStatement
            | ContinueStatement
            | ThrowStatement
            | ExpressionStatement
            | Block
            | EmptyStatement

  // Módulos
  ImportStatement = "importe" ImportClause "de" stringLiteral ";"?  -- withClause
                  | "importe" stringLiteral ";"?                     -- sideEffect

  ImportClause = "*" "como" identifier                          -- namespace
               | "{" ListOf<ImportSpecifier, ","> "}"           -- named
               | identifier                                     -- default

  ImportSpecifier = identifier "como" identifier  -- renamed
                  | identifier                    -- simple

  ExportStatement = "exporte" "padrao" Expression ";"?                          -- default
                  | "exporte" "{" ListOf<ExportSpecifier, ","> "}" ";"?         -- named
                  | "exporte" FunctionDeclaration                                -- func
                  | "exporte" VariableDeclaration                                -- var
                  | "exporte" ClassDeclaration                                   -- class

  ExportSpecifier = identifier "como" identifier  -- renamed
                  | identifier                    -- simple

  // Declarações de variáveis
  VariableDeclaration = ("deixe" | "fixe") ObjectPattern "=" Expression ";"?  -- destructObject
                      | ("deixe" | "fixe") ArrayPattern "=" Expression ";"?   -- destructArray
                      | ("deixe" | "fixe") identifier "=" Expression ";"?     -- simple

  ObjectPattern = "{" ListOf<identifier, ","> "}"
  ArrayPattern = "[" ListOf<identifier, ","> "]"

  // Expressão como statement
  ExpressionStatement = Expression ";"?

  // Condicional
  IfStatement = "se" "(" Expression ")" Block ElseClause?
  ElseClause = "senao" IfStatement  -- elseIf
             | "senao" Block        -- else

  // Laços
  WhileStatement = "enquanto" "(" Expression ")" Block

  ForStatement = "para" "(" ForInit ";" Expression ";" ForUpdate ")" Block
  ForInit = ("deixe" | "fixe") identifier "=" Expression  -- varDecl
           | AssignmentExpression                           -- assign
  ForUpdate = AssignmentExpression

  // Controle de fluxo
  BreakStatement = "quebre" ";"?
  ContinueStatement = "continue" ";"?
  ThrowStatement = "lance" Expression ";"?

  // Tratamento de erros
  TryStatement = "tente" Block CatchClause? FinallyClause?
  CatchClause = "capture" "(" identifier ")" Block
  FinallyClause = "finalmente" Block

  // Escolha (switch)
  SwitchStatement = "escolha" "(" Expression ")" "{" CaseClause* DefaultClause? "}"
  CaseClause = "caso" Expression ":" Statement*
  DefaultClause = "padrao" ":" Statement*

  // Funções
  FunctionDeclaration = "assincrono" "funcao" identifier "(" Params ")" Block  -- async
                      | "funcao" identifier "(" Params ")" Block               -- sync
  Params = ListOf<identifier, ",">
  ReturnStatement = "retorne" Expression? ";"?

  // Classes
  ClassDeclaration = "classe" identifier ClassBody
  ClassBody = "{" MethodDefinition* "}"
  MethodDefinition = "construtor" "(" Params ")" Block               -- constructor
                   | "assincrono" identifier "(" Params ")" Block   -- asyncMethod
                   | identifier "(" Params ")" Block                -- method

  // Blocos
  Block = "{" Statement* "}"
  EmptyStatement = ";"

  // Expressões (precedência crescente de cima para baixo)
  Expression = AssignmentExpression

  AssignmentExpression = "assincrono" ArrowParams "=>" ArrowBody  -- asyncArrow
                       | ArrowParams "=>" ArrowBody               -- arrow
                       | CallExpression "+=" AssignmentExpression  -- addAssign
                       | CallExpression "-=" AssignmentExpression  -- subAssign
                       | CallExpression "*=" AssignmentExpression  -- mulAssign
                       | CallExpression "/=" AssignmentExpression  -- divAssign
                       | CallExpression "=" AssignmentExpression   -- assign
                       | TernaryExpression

  ArrowParams = "(" Params ")"  -- parens
              | identifier      -- ident

  ArrowBody = Block              -- block
            | AssignmentExpression  -- expr

  TernaryExpression = LogicalOrExpression "?" Expression ":" TernaryExpression  -- ternary
                    | LogicalOrExpression

  LogicalOrExpression = LogicalOrExpression "||" LogicalAndExpression  -- or
                      | LogicalAndExpression

  LogicalAndExpression = LogicalAndExpression "&&" EqualityExpression  -- and
                       | EqualityExpression

  EqualityExpression = EqualityExpression "===" ComparisonExpression  -- eq
                     | EqualityExpression "!==" ComparisonExpression  -- neq
                     | EqualityExpression "==" ComparisonExpression   -- looseEq
                     | EqualityExpression "!=" ComparisonExpression   -- looseNeq
                     | ComparisonExpression

  ComparisonExpression = ComparisonExpression "<=" AddExpression  -- lte
                       | ComparisonExpression ">=" AddExpression  -- gte
                       | ComparisonExpression "<" AddExpression   -- lt
                       | ComparisonExpression ">" AddExpression   -- gt
                       | AddExpression

  AddExpression = AddExpression "+" MulExpression  -- add
                | AddExpression "-" MulExpression  -- sub
                | MulExpression

  MulExpression = MulExpression "*" UnaryExpression  -- mul
                | MulExpression "/" UnaryExpression  -- div
                | MulExpression "%" UnaryExpression  -- mod
                | UnaryExpression

  UnaryExpression = "aguarde" UnaryExpression  -- await
                  | "novo" CallExpression      -- new
                  | "++" UnaryExpression       -- preInc
                  | "--" UnaryExpression       -- preDec
                  | "!" UnaryExpression        -- not
                  | "-" UnaryExpression        -- neg
                  | CallExpression "++"        -- postInc
                  | CallExpression "--"        -- postDec
                  | CallExpression

  CallExpression = CallExpression "(" Arguments ")"  -- call
                 | CallExpression "." identifier      -- member
                 | CallExpression "[" Expression "]"  -- index
                 | PrimaryExpression

  Arguments = ListOf<SpreadOrExpr, ",">

  PrimaryExpression = "(" Expression ")"  -- paren
                    | "verdadeiro"         -- true
                    | "falso"              -- false
                    | "nulo"               -- null
                    | "isso"               -- this
                    | ObjectLiteral        -- object
                    | ArrayLiteral         -- array
                    | templateLiteral      -- template
                    | stringLiteral        -- string
                    | numberLiteral        -- number
                    | "imprima"            -- imprima
                    | identifier           -- ident

  templateLiteral = "\`" templatePart* "\`"
  templatePart = "\${" templateExpr "}"  -- interp
               | templateChar+          -- chars
  templateExpr = (~"}" any)*
  templateChar = ~("\`" | "\${") any

  // Literais compostos
  ArrayLiteral = "[" ListOf<SpreadOrExpr, ","> "]"
  ObjectLiteral = "{" ListOf<PropertyOrSpread, ","> "}"
  PropertyOrSpread = "..." Expression  -- spread
                   | PropertyDef       -- prop
  PropertyDef = (identifier | stringLiteral) ":" Expression

  SpreadOrExpr = "..." Expression  -- spread
               | Expression        -- expr

  // Tokens
  stringLiteral = "\\"" (~"\\"" any)* "\\""
                | "'" (~"'" any)* "'"

  numberLiteral = digit+ ("." digit+)?

  identifier = ~keyword identStart identPart*
  identStart = letter | "_" | "$"
  identPart = identStart | digit

  keyword = ("deixe" | "fixe" | "funcao" | "retorne"
           | "senao" | "se" | "enquanto" | "para"
           | "verdadeiro" | "falso" | "nulo" | "imprima"
           | "classe" | "novo" | "isso" | "construtor"
           | "quebre" | "continue" | "escolha" | "caso" | "padrao"
           | "tente" | "capture" | "finalmente" | "lance"
           | "assincrono" | "aguarde"
           | "importe" | "exporte" | "de" | "como") ~identPart

  // Espaços e comentários
  space += comment
  comment = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
          | "/*" (~"*/" any)* "*/"            -- multiLine
}
`,tt=Ur(Gr),Ge=tt.createSemantics(),zr={tamanho:"length",adicione:"push",remova:"pop",mensagem:"message",mapa:"map",filtre:"filter",paraCada:"forEach",reduza:"reduce",encontre:"find",inclui:"includes",divida:"split",inverta:"reverse",junta:"join"},Kr={Erro:"Error",Promessa:"Promise"};Ge.addOperation("toJS()",{Program(t){return t.children.map(e=>e.toJS()).join(`
`)},ImportStatement_withClause(t,e,n,r,s){const i=r.toJS().replace(/\.jscripto"$/,'.js"');return`import ${e.toJS()} from ${i};`},ImportStatement_sideEffect(t,e,n){return`import ${e.toJS()};`},ImportClause_namespace(t,e,n){return`* as ${n.toJS()}`},ImportClause_named(t,e,n){return`{ ${e.asIteration().children.map(s=>s.toJS()).join(", ")} }`},ImportClause_default(t){return t.toJS()},ImportSpecifier_renamed(t,e,n){return`${t.toJS()} as ${n.toJS()}`},ImportSpecifier_simple(t){return t.toJS()},ExportStatement_default(t,e,n,r){return`export default ${n.toJS()};`},ExportStatement_named(t,e,n,r,s){return`export { ${n.asIteration().children.map(o=>o.toJS()).join(", ")} };`},ExportStatement_func(t,e){return`export ${e.toJS()}`},ExportStatement_var(t,e){return`export ${e.toJS()}`},ExportStatement_class(t,e){return`export ${e.toJS()}`},ExportSpecifier_renamed(t,e,n){return`${t.toJS()} as ${n.toJS()}`},ExportSpecifier_simple(t){return t.toJS()},VariableDeclaration_destructObject(t,e,n,r,s){return`${t.sourceString==="deixe"?"let":"const"} ${e.toJS()} = ${r.toJS()};`},VariableDeclaration_destructArray(t,e,n,r,s){return`${t.sourceString==="deixe"?"let":"const"} ${e.toJS()} = ${r.toJS()};`},VariableDeclaration_simple(t,e,n,r,s){return`${t.sourceString==="deixe"?"let":"const"} ${e.toJS()} = ${r.toJS()};`},ObjectPattern(t,e,n){return`{${e.asIteration().children.map(s=>s.toJS()).join(", ")}}`},ArrayPattern(t,e,n){return`[${e.asIteration().children.map(s=>s.toJS()).join(", ")}]`},ExpressionStatement(t,e){return`${t.toJS()};`},IfStatement(t,e,n,r,s,i){let o=`if (${n.toJS()}) ${s.toJS()}`;return i.children.length>0&&(o+=` ${i.children[0].toJS()}`),o},ElseClause_elseIf(t,e){return`else ${e.toJS()}`},ElseClause_else(t,e){return`else ${e.toJS()}`},WhileStatement(t,e,n,r,s){return`while (${n.toJS()}) ${s.toJS()}`},ForStatement(t,e,n,r,s,i,o,a,l){return`for (${n.toJS()}; ${s.toJS()}; ${o.toJS()}) ${l.toJS()}`},ForInit_varDecl(t,e,n,r){return`${t.sourceString==="deixe"?"let":"const"} ${e.toJS()} = ${r.toJS()}`},ForInit_assign(t){return t.toJS()},ForUpdate(t){return t.toJS()},BreakStatement(t,e){return"break;"},ContinueStatement(t,e){return"continue;"},TryStatement(t,e,n,r){let s=`try ${e.toJS()}`;return n.children.length>0&&(s+=` ${n.children[0].toJS()}`),r.children.length>0&&(s+=` ${r.children[0].toJS()}`),s},CatchClause(t,e,n,r,s){return`catch (${n.toJS()}) ${s.toJS()}`},FinallyClause(t,e){return`finally ${e.toJS()}`},ThrowStatement(t,e,n){return`throw ${e.toJS()};`},SwitchStatement(t,e,n,r,s,i,o,a){const l=i.children.map(d=>d.toJS()).join(`
`),p=o.children.length>0?`
`+o.children[0].toJS():"";return`switch (${n.toJS()}) {
${l}${p}
}`},CaseClause(t,e,n,r){const s=r.children.map(i=>i.toJS()).join(`
`);return`case ${e.toJS()}:
${s}`},DefaultClause(t,e,n){return`default:
${n.children.map(s=>s.toJS()).join(`
`)}`},FunctionDeclaration_async(t,e,n,r,s,i,o){return`async function ${n.toJS()}(${s.toJS()}) ${o.toJS()}`},FunctionDeclaration_sync(t,e,n,r,s,i){return`function ${e.toJS()}(${r.toJS()}) ${i.toJS()}`},Params(t){return t.asIteration().children.map(e=>e.toJS()).join(", ")},ReturnStatement(t,e,n){return e.children.length>0?`return ${e.children[0].toJS()};`:"return;"},ClassDeclaration(t,e,n){return`class ${e.toJS()} ${n.toJS()}`},ClassBody(t,e,n){return`{
${e.children.map(s=>s.toJS()).join(`
`)}
}`},MethodDefinition_constructor(t,e,n,r,s){return`constructor(${n.toJS()}) ${s.toJS()}`},MethodDefinition_asyncMethod(t,e,n,r,s,i){return`async ${e.toJS()}(${r.toJS()}) ${i.toJS()}`},MethodDefinition_method(t,e,n,r,s){return`${t.toJS()}(${n.toJS()}) ${s.toJS()}`},Block(t,e,n){return`{
${e.children.map(s=>s.toJS()).join(`
`)}
}`},EmptyStatement(t){return";"},AssignmentExpression_asyncArrow(t,e,n,r){return`async ${e.toJS()} => ${r.toJS()}`},AssignmentExpression_arrow(t,e,n){return`${t.toJS()} => ${n.toJS()}`},ArrowParams_parens(t,e,n){return`(${e.toJS()})`},ArrowParams_ident(t){return t.toJS()},ArrowBody_block(t){return t.toJS()},ArrowBody_expr(t){return t.toJS()},AssignmentExpression_addAssign(t,e,n){return`${t.toJS()} += ${n.toJS()}`},AssignmentExpression_subAssign(t,e,n){return`${t.toJS()} -= ${n.toJS()}`},AssignmentExpression_mulAssign(t,e,n){return`${t.toJS()} *= ${n.toJS()}`},AssignmentExpression_divAssign(t,e,n){return`${t.toJS()} /= ${n.toJS()}`},AssignmentExpression_assign(t,e,n){return`${t.toJS()} = ${n.toJS()}`},TernaryExpression_ternary(t,e,n,r,s){return`${t.toJS()} ? ${n.toJS()} : ${s.toJS()}`},LogicalOrExpression_or(t,e,n){return`${t.toJS()} || ${n.toJS()}`},LogicalAndExpression_and(t,e,n){return`${t.toJS()} && ${n.toJS()}`},EqualityExpression_eq(t,e,n){return`${t.toJS()} === ${n.toJS()}`},EqualityExpression_neq(t,e,n){return`${t.toJS()} !== ${n.toJS()}`},EqualityExpression_looseEq(t,e,n){return`${t.toJS()} == ${n.toJS()}`},EqualityExpression_looseNeq(t,e,n){return`${t.toJS()} != ${n.toJS()}`},ComparisonExpression_lte(t,e,n){return`${t.toJS()} <= ${n.toJS()}`},ComparisonExpression_gte(t,e,n){return`${t.toJS()} >= ${n.toJS()}`},ComparisonExpression_lt(t,e,n){return`${t.toJS()} < ${n.toJS()}`},ComparisonExpression_gt(t,e,n){return`${t.toJS()} > ${n.toJS()}`},AddExpression_add(t,e,n){return`${t.toJS()} + ${n.toJS()}`},AddExpression_sub(t,e,n){return`${t.toJS()} - ${n.toJS()}`},MulExpression_mul(t,e,n){return`${t.toJS()} * ${n.toJS()}`},MulExpression_div(t,e,n){return`${t.toJS()} / ${n.toJS()}`},MulExpression_mod(t,e,n){return`${t.toJS()} % ${n.toJS()}`},UnaryExpression_await(t,e){return`await ${e.toJS()}`},UnaryExpression_new(t,e){return`new ${e.toJS()}`},UnaryExpression_preInc(t,e){return`++${e.toJS()}`},UnaryExpression_preDec(t,e){return`--${e.toJS()}`},UnaryExpression_not(t,e){return`!${e.toJS()}`},UnaryExpression_neg(t,e){return`-${e.toJS()}`},UnaryExpression_postInc(t,e){return`${t.toJS()}++`},UnaryExpression_postDec(t,e){return`${t.toJS()}--`},CallExpression_call(t,e,n,r){return`${t.toJS()}(${n.toJS()})`},CallExpression_member(t,e,n){const r=n.sourceString,s=zr[r]||r;return`${t.toJS()}.${s}`},CallExpression_index(t,e,n,r){return`${t.toJS()}[${n.toJS()}]`},Arguments(t){return t.asIteration().children.map(e=>e.toJS()).join(", ")},PrimaryExpression_paren(t,e,n){return`(${e.toJS()})`},PrimaryExpression_true(t){return"true"},PrimaryExpression_false(t){return"false"},PrimaryExpression_null(t){return"null"},PrimaryExpression_this(t){return"this"},PrimaryExpression_object(t){return t.toJS()},PrimaryExpression_array(t){return t.toJS()},PrimaryExpression_string(t){return t.toJS()},PrimaryExpression_number(t){return t.toJS()},PrimaryExpression_imprima(t){return"console.log"},PrimaryExpression_ident(t){return t.toJS()},PrimaryExpression_template(t){return t.toJS()},templateLiteral(t,e,n){return`\`${e.children.map(r=>r.toJS()).join("")}\``},templatePart_interp(t,e,n){const r=e.sourceString,s=tt.match(r,"Expression");return s.failed()?`\${${r}}`:`\${${Ge(s).toJS()}}`},templatePart_chars(t){return t.sourceString},templateExpr(t){return this.sourceString},stringLiteral(t,e,n){return`"${e.sourceString}"`},SpreadOrExpr_spread(t,e){return`...${e.toJS()}`},SpreadOrExpr_expr(t){return t.toJS()},ArrayLiteral(t,e,n){return`[${e.asIteration().children.map(s=>s.toJS()).join(", ")}]`},ObjectLiteral(t,e,n){return`{${e.asIteration().children.map(s=>s.toJS()).join(", ")}}`},PropertyOrSpread_spread(t,e){return`...${e.toJS()}`},PropertyOrSpread_prop(t){return t.toJS()},PropertyDef(t,e,n){return`${t.toJS()}: ${n.toJS()}`},numberLiteral(t,e,n){return this.sourceString},identifier(t,e){const n=this.sourceString;return Kr[n]||n},_terminal(){return this.sourceString}});function Hr(t){let e=0;const n="  ";return t.split(`
`).map(r=>{const s=r.trim();if(!s)return"";if(s.startsWith("}")&&(e=Math.max(0,e-1)),/^(case\b[^:]*|default):$/.test(s)&&e>0){e--;const o=n.repeat(e)+s;return e++,o}const i=n.repeat(e)+s;return s.endsWith("{")&&e++,i}).join(`
`)}function It(t){const e=tt.match(t);if(e.failed()){const n=new Error(`Erro de sintaxe: ${e.shortMessage}`);throw n.name="ErroSintaxe",n}return Hr(Ge(e).toJS())}const je=`funcao saudacao(nome) {
  retorne "Olá, " + nome + "!"
}

deixe mensagem = saudacao("mundo")
imprima(mensagem)
`,Wr=[{pt:"deixe",js:"let"},{pt:"fixe",js:"const"},{pt:"funcao",js:"function"},{pt:"retorne",js:"return"},{pt:"se",js:"if"},{pt:"senao",js:"else"},{pt:"enquanto",js:"while"},{pt:"para",js:"for"},{pt:"verdadeiro",js:"true"},{pt:"falso",js:"false"},{pt:"nulo",js:"null"},{pt:"imprima",js:"console.log"},{pt:"classe",js:"class"},{pt:"novo",js:"new"},{pt:"isso",js:"this"},{pt:"construtor",js:"constructor"},{pt:"quebre",js:"break"},{pt:"continue",js:"continue"},{pt:"escolha",js:"switch"},{pt:"caso",js:"case"},{pt:"padrao",js:"default"},{pt:"tente",js:"try"},{pt:"capture",js:"catch"},{pt:"finalmente",js:"finally"},{pt:"lance",js:"throw"},{pt:"assincrono",js:"async"},{pt:"aguarde",js:"await"},{pt:"importe",js:"import"},{pt:"exporte",js:"export"},{pt:"de",js:"from"},{pt:"como",js:"as"}],bt=[{label:"Olá, mundo",code:`funcao saudacao(nome) {
  retorne "Olá, " + nome + "!"
}

deixe mensagem = saudacao("mundo")
imprima(mensagem)
`},{label:"FizzBuzz",code:`para (deixe i = 1; i <= 20; i++) {
  se (i % 15 === 0) {
    imprima("FizzBuzz")
  } senao se (i % 3 === 0) {
    imprima("Fizz")
  } senao se (i % 5 === 0) {
    imprima("Buzz")
  } senao {
    imprima(i)
  }
}
`},{label:"Fibonacci",code:`funcao fibonacci(n) {
  se (n <= 1) {
    retorne n
  }
  retorne fibonacci(n - 1) + fibonacci(n - 2)
}

para (deixe i = 0; i < 10; i++) {
  imprima(fibonacci(i))
}
`},{label:"Fatorial",code:`funcao fatorial(n) {
  se (n <= 1) {
    retorne 1
  }
  retorne n * fatorial(n - 1)
}

imprima(fatorial(5))
imprima(fatorial(10))
`},{label:"Palíndromo",code:`funcao palindromo(palavra) {
  deixe invertida = palavra.divida("").inverta().junta("")
  retorne palavra === invertida
}

imprima(palindromo("arara"))
imprima(palindromo("banana"))
`},{label:"Ordenação por bolha",code:`funcao ordenar(lista) {
  deixe arr = [...lista]
  para (deixe i = 0; i < arr.tamanho; i++) {
    para (deixe j = 0; j < arr.tamanho - i - 1; j++) {
      se (arr[j] > arr[j + 1]) {
        deixe temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  retorne arr
}

deixe numeros = [64, 34, 25, 12, 22, 11, 90]
imprima(ordenar(numeros))
`},{label:"Contador de palavras",code:`funcao contarPalavras(texto) {
  deixe palavras = texto.split(" ")
  deixe contagem = {}
  palavras.paraCada(p => {
    contagem[p] = (contagem[p] || 0) + 1
  })
  retorne contagem
}

deixe texto = "o rato roeu a roupa do rei de roma"
imprima(contarPalavras(texto))
`},{label:"Classe — Pilha",code:`classe Pilha {
  construtor() {
    isso.itens = []
  }

  adicionar(item) {
    isso.itens.adicione(item)
  }

  retirar() {
    retorne isso.itens.remova()
  }

  topo() {
    retorne isso.itens[isso.itens.tamanho - 1]
  }

  vazia() {
    retorne isso.itens.tamanho === 0
  }
}

deixe pilha = novo Pilha()
pilha.adicionar(1)
pilha.adicionar(2)
pilha.adicionar(3)
imprima(pilha.topo())
imprima(pilha.retirar())
imprima(pilha.topo())
`}],Vr=[{pt:".tamanho",js:".length"},{pt:".adicione()",js:".push()"},{pt:".remova()",js:".pop()"},{pt:".mapa()",js:".map()"},{pt:".filtre()",js:".filter()"},{pt:".paraCada()",js:".forEach()"},{pt:".reduza()",js:".reduce()"},{pt:".encontre()",js:".find()"},{pt:".inclui()",js:".includes()"},{pt:".divida()",js:".split()"},{pt:".inverta()",js:".reverse()"},{pt:".junta()",js:".join()"}],Yr="https://stackblitz.com",Qr=new Error;Qr.stack="";const Oe={};let he=null;const Le={get editorOrigin(){return he==null&&(he=new URL(globalThis.WEBCONTAINER_API_IFRAME_URL??Yr).origin),he},set editorOrigin(t){he=new URL(t).origin},setQueryParam(t,e){Oe[t]=e},get url(){const t=new URL(this.editorOrigin);t.pathname="/headless";for(const e in Oe)t.searchParams.set(e,Oe[e]);return t.searchParams.set("version","1.6.1"),t}};function Xr(){let t,e;function n(){e=new Promise(r=>t=r)}return n(),{get promise(){return e},resolve(r){return t(r)},reset:n}}Xr();var ce;(function(t){t.UncaughtException="PREVIEW_UNCAUGHT_EXCEPTION",t.UnhandledRejection="PREVIEW_UNHANDLED_REJECTION",t.ConsoleError="PREVIEW_CONSOLE_ERROR"})(ce||(ce={}));var Zr=Object.defineProperty,es=(t,e)=>{for(var n in e)Zr(t,n,{get:e[n],enumerable:!0})},K={};es(K,{createEndpoint:()=>en,expose:()=>st,proxy:()=>ln,proxyMarker:()=>nt,releaseProxy:()=>tn,transfer:()=>an,transferHandlers:()=>rt,windowEndpoint:()=>is,wrap:()=>sn});var nt=Symbol("Comlink.proxy"),en=Symbol("Comlink.endpoint"),tn=Symbol("Comlink.releaseProxy"),ze=Symbol("Comlink.thrown"),nn=t=>typeof t=="object"&&t!==null||typeof t=="function",ts={canHandle:t=>nn(t)&&t[nt],serialize(t){const{port1:e,port2:n}=new MessageChannel;return st(t,e),[n,[n]]},deserialize(t){return t.start(),sn(t)}},ns={canHandle:t=>nn(t)&&ze in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},rt=new Map([["proxy",ts],["throw",ns]]);function st(t,e=self){e.addEventListener("message",function n(r){if(!r||!r.data)return;const{id:s,type:i,path:o}=Object.assign({path:[]},r.data),a=(r.data.argumentList||[]).map(X);let l;try{const p=o.slice(0,-1).reduce((c,u)=>c[u],t),d=o.reduce((c,u)=>c[u],t);switch(i){case 0:l=d;break;case 1:p[o.slice(-1)[0]]=X(r.data.value),l=!0;break;case 2:l=d.apply(p,a);break;case 3:{const c=new d(...a);l=ln(c)}break;case 4:{const{port1:c,port2:u}=new MessageChannel;st(t,u),l=an(c,[c])}break;case 5:l=void 0;break}}catch(p){l={value:p,[ze]:0}}Promise.resolve(l).catch(p=>({value:p,[ze]:0})).then(p=>{const[d,c]=it(p);e.postMessage(Object.assign(Object.assign({},d),{id:s}),c),i===5&&(e.removeEventListener("message",n),rn(e))})}),e.start&&e.start()}function rs(t){return t.constructor.name==="MessagePort"}function rn(t){rs(t)&&t.close()}function sn(t,e){return Ke(t,[],e)}function fe(t){if(t)throw new Error("Proxy has been released and is not useable")}function Ke(t,e=[],n=function(){}){let r=!1;const s=new Proxy(n,{get(i,o){if(fe(r),o===tn)return()=>re(t,{type:5,path:e.map(a=>a.toString())}).then(()=>{rn(t),r=!0});if(o==="then"){if(e.length===0)return{then:()=>s};const a=re(t,{type:0,path:e.map(l=>l.toString())}).then(X);return a.then.bind(a)}return Ke(t,[...e,o])},set(i,o,a){fe(r);const[l,p]=it(a);return re(t,{type:1,path:[...e,o].map(d=>d.toString()),value:l},p).then(X)},apply(i,o,a){fe(r);const l=e[e.length-1];if(l===en)return re(t,{type:4}).then(X);if(l==="bind")return Ke(t,e.slice(0,-1));const[p,d]=Et(a);return re(t,{type:2,path:e.map(c=>c.toString()),argumentList:p},d).then(X)},construct(i,o){fe(r);const[a,l]=Et(o);return re(t,{type:3,path:e.map(p=>p.toString()),argumentList:a},l).then(X)}});return s}function ss(t){return Array.prototype.concat.apply([],t)}function Et(t){const e=t.map(it);return[e.map(n=>n[0]),ss(e.map(n=>n[1]))]}var on=new WeakMap;function an(t,e){return on.set(t,e),t}function ln(t){return Object.assign(t,{[nt]:!0})}function is(t,e=self,n="*"){return{postMessage:(r,s)=>t.postMessage(r,n,s),addEventListener:e.addEventListener.bind(e),removeEventListener:e.removeEventListener.bind(e)}}function it(t){for(const[e,n]of rt)if(n.canHandle(t)){const[r,s]=n.serialize(t);return[{type:3,name:e,value:r},s]}return[{type:0,value:t},on.get(t)||[]]}function X(t){switch(t.type){case 3:return rt.get(t.name).deserialize(t.value);case 0:return t.value}}function re(t,e,n){return new Promise(r=>{const s=os();t.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==s||(t.removeEventListener("message",i),r(o.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:s},e),n)})}function os(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const as=[ce.ConsoleError,ce.UncaughtException,ce.UnhandledRejection];function ls(t){return!(t==null||typeof t!="object"||!("type"in t)||!as.includes(t.type))}function se(t){const e=Object.create(null);return t?Object.assign(e,t):e}const cs=new TextDecoder("latin1");function cn(t){const e={d:{}};for(const n of Object.keys(t)){const r=t[n];if("file"in r){if("symlink"in r.file){e.d[n]={f:{l:r.file.symlink}};continue}const i=r.file.contents,o=typeof i=="string"?i:cs.decode(i),a=typeof i=="string"?{}:{b:!0};e.d[n]={f:{c:o,...a}};continue}const s=cn(r.directory);e.d[n]=s}return e}function un(t){const e=se();if("f"in t)throw new Error("It is not possible to export a single file in the JSON format.");if("d"in t)for(const n of Object.keys(t.d)){const r=t.d[n];"d"in r?e[n]=se({directory:un(r)}):"f"in r&&("c"in r.f?e[n]=se({file:se({contents:r.f.b?us(r.f.c):r.f.c})}):"l"in r.f&&(e[n]=se({file:se({symlink:r.f.l})})))}return e}function us(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n].charCodeAt(0);return e}let ge=null,xe=null,Ne={};const pn=new TextDecoder,ps=new TextEncoder;class W{_instance;_runtimeInfo;fs;static _instance=null;static _teardownPromise=null;_tornDown=!1;_unsubscribeFromTokenChangedListener=()=>{};constructor(e,n,r,s){this._instance=e,this._runtimeInfo=s,this.fs=new xs(n)}async spawn(e,n,r){let s=[];Array.isArray(n)?s=n:r=n;let i,o=new ReadableStream;if(r?.output!==!1){const v=Is();i=v.push,o=v.stream}let a,l,p,d;const c=ye(Je(i)),u=ye(Je(a)),h=ye(Je(p)),g=await this._instance.run({command:e,args:s,cwd:r?.cwd,env:r?.env,terminal:r?.terminal},u,h,c);return new gs(g,o,l,d)}async export(e,n){const r={format:n?.format??"json",includes:n?.includes,excludes:n?.excludes,external:!0},s=await this._instance.serialize(e,r);if(r.format==="json"){const i=JSON.parse(pn.decode(s));return un(i)}return s}on(e,n){if(e==="preview-message"){const i=n;n=o=>{ls(o)&&i(o)}}const{listener:r,subscribe:s}=bs(n);return s(this._instance.on(e,K.proxy(r)))}mount(e,n){const r=e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):ps.encode(JSON.stringify(cn(e)));return this._instance.loadFiles(K.transfer(r,[r.buffer]),{mountPoints:n?.mountPoint})}setPreviewScript(e,n){return this._instance.setPreviewScript(e,n)}get path(){return this._runtimeInfo.path}get workdir(){return this._runtimeInfo.cwd}teardown(){if(this._tornDown)throw new Error("WebContainer already torn down");this._tornDown=!0,this._unsubscribeFromTokenChangedListener();const e=async()=>{try{await this.fs._teardown(),await this._instance.teardown()}finally{this._instance[K.releaseProxy](),W._instance===this&&(W._instance=null)}};W._teardownPromise=e()}static async boot(e={}){await this._teardownPromise,W._teardownPromise=null;const{workdirName:n}=e;if(window.crossOriginIsolated&&e.coep==="none"&&console.warn(`A Cross-Origin-Embedder-Policy header is required in cross origin isolated environments.
Set the 'coep' option to 'require-corp'.`),n?.includes("/")||n===".."||n===".")throw new Error("workdirName should be a valid folder name");for(;ge;)await ge;if(W._instance)throw new Error("Only a single WebContainer instance can be booted");const r=ys(e);ge=r.catch(()=>{});try{const s=await r;return W._instance=s,s}finally{ge=null}}}const ms=1,ds=2;class hs{name;_type;constructor(e,n){this.name=e,this._type=n}isFile(){return this._type===ms}isDirectory(){return this._type===ds}}class fs{_apiClient;_path;_options;_listener;_wrappedListener;_watcher;_closed=!1;constructor(e,n,r,s){this._apiClient=e,this._path=n,this._options=r,this._listener=s,this._apiClient._watchers.add(this),this._wrappedListener=(i,o)=>{this._listener&&!this._closed&&this._listener(i,o)},this._apiClient._fs.watch(this._path,this._options,ye(this._wrappedListener)).then(i=>{if(this._watcher=i,this._closed)return this._teardown()}).catch(console.error)}async close(){this._closed||(this._closed=!0,this._apiClient._watchers.delete(this),await this._teardown())}async _teardown(){await this._watcher?.close().finally(()=>{this._watcher?.[K.releaseProxy]()})}}class gs{output;input;exit;_process;stdout;stderr;constructor(e,n,r,s){this.output=n,this._process=e,this.input=new WritableStream({write:i=>{this._getProcess()?.write(i).catch(()=>{})}}),this.exit=this._onExit(),this.stdout=r,this.stderr=s}kill(){this._process?.kill()}resize(e){this._getProcess()?.resize(e)}async _onExit(){try{return await this._process.onExit}finally{this._process?.[K.releaseProxy](),this._process=null}}_getProcess(){return this._process==null&&console.warn("This process already exited"),this._process}}class xs{_fs;_watchers=new Set([]);constructor(e){this._fs=e}rm(...e){return this._fs.rm(...e)}async readFile(e,n){return await this._fs.readFile(e,n)}async rename(e,n){return await this._fs.rename(e,n)}async writeFile(e,n,r){if(n instanceof Uint8Array){const s=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength);n=K.transfer(new Uint8Array(s),[s])}await this._fs.writeFile(e,n,r)}async readdir(e,n){const r=await this._fs.readdir(e,n);return _s(r)||vs(r)?r:r.map(i=>new hs(i.name,i["Symbol(type)"]))}async mkdir(e,n){return await this._fs.mkdir(e,n)}watch(e,n,r){return typeof n=="function"&&(r=n,n=null),new fs(this,e,n,r)}async _teardown(){this._fs[K.releaseProxy](),await Promise.all([...this._watchers].map(e=>e.close()))}}async function ys(t){const{serverPromise:e}=Ss(t),r=await(await e).build({host:window.location.host,version:"1.6.1",workdirName:t.workdirName,forwardPreviewErrors:t.forwardPreviewErrors}),[s,i,o]=await Promise.all([r.fs(),r.previewScript(),r.runtimeInfo()]);return new W(r,s,i,o)}function Je(t){if(t!=null)return e=>{e instanceof Uint8Array?t(pn.decode(e)):e==null&&t(null)}}function ye(t){if(t!=null)return K.proxy(t)}function Ss(t){if(xe!=null)return t.coep!==Ne.coep&&(console.warn(`Attempting to boot WebContainer with 'coep: ${t.coep}'`),console.warn(`First boot had 'coep: ${Ne.coep}', new settings will not take effect!`)),{serverPromise:xe};t.coep&&Le.setQueryParam("coep",t.coep),t.experimentalNode&&Le.setQueryParam("experimental_node","1");const e=document.createElement("iframe");e.style.display="none",e.setAttribute("allow","cross-origin-isolated");const n=Le.url;e.src=n.toString();const{origin:r}=n;return Ne={...t},xe=new Promise(s=>{const i=o=>{if(o.origin!==r)return;const{data:a}=o;if(a.type==="init"){s(K.wrap(o.ports[0]));return}if(a.type==="warning"){console[a.level].call(console,a.message);return}};window.addEventListener("message",i)}),document.body.insertBefore(e,null),{serverPromise:xe}}function _s(t){return typeof t[0]=="string"}function vs(t){return t[0]instanceof Uint8Array}function Is(){let t=null;return{stream:new ReadableStream({start(r){t=r}}),push:r=>{r!=null?t?.enqueue(r):(t?.close(),t=null)}}}function bs(t){let e=!1,n=()=>{};return{subscribe(s){return s.then(i=>{n=i,e&&n()}),()=>{e=!0,n()}},listener:(...s)=>{e||t(...s)}}}let $e=null,ke=null;function Es(){return $e?Promise.resolve($e):(ke||(ke=W.boot().then(t=>($e=t,t))),ke)}const ws=xn.define([{tag:[f.keyword,f.operatorKeyword,f.modifier,f.color,f.constant(f.name),f.standard(f.name),f.standard(f.tagName),f.special(f.brace),f.atom,f.bool,f.special(f.variableName)],color:"#569cd6"},{tag:[f.controlKeyword,f.moduleKeyword],color:"#c586c0"},{tag:[f.name,f.deleted,f.character,f.macroName,f.propertyName,f.variableName,f.labelName,f.definition(f.name)],color:"#9cdcfe"},{tag:f.heading,fontWeight:"bold",color:"#9cdcfe"},{tag:[f.typeName,f.className,f.tagName,f.number,f.changed,f.annotation,f.self,f.namespace],color:"#4ec9b0"},{tag:[f.function(f.variableName),f.function(f.propertyName)],color:"#dcdcaa"},{tag:[f.number],color:"#b5cea8"},{tag:[f.operator,f.punctuation,f.separator,f.url,f.escape,f.regexp],color:"#d4d4d4"},{tag:[f.regexp],color:"#d16969"},{tag:[f.special(f.string),f.processingInstruction,f.string,f.inserted],color:"#ce9178"},{tag:[f.angleBracket],color:"#808080"},{tag:f.strong,fontWeight:"bold"},{tag:f.emphasis,fontStyle:"italic"},{tag:f.strikethrough,textDecoration:"line-through"},{tag:[f.meta,f.comment],color:"#6a9955"},{tag:f.link,color:"#6a9955",textDecoration:"underline"},{tag:f.invalid,color:"#ff0000"}]),As=ie.theme({"&.cm-editor":{height:"100%",background:"var(--cm-backgroundColor)",color:"var(--cm-textColor)"},".cm-scroller":{lineHeight:"1.5"},".cm-line":{padding:"0 0 0 4px"},".cm-gutters":{background:"var(--cm-gutter-backgroundColor)",borderRight:"0",color:"var(--cm-gutter-textColor)"},".cm-activeLine":{background:"var(--cm-activeLineBackgroundColor)"},".cm-cursor":{borderLeft:"var(--cm-cursor-width) solid var(--cm-cursor-backgroundColor)"},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"var(--cm-selection-backgroundColorFocused)",opacity:"var(--cm-selection-backgroundOpacityFocused, 0.3)"}});function Cs(){return ie.theme({".cm-gutters":{background:"var(--cm-gutter-backgroundColor)",borderRight:"0",color:"var(--cm-gutter-textColor)"},".cm-gutter":{"&.cm-lineNumbers":{fontFamily:"Roboto Mono, monospace",fontSize:"13px",minWidth:"28px"},"& .cm-activeLineGutter":{background:"transparent",color:"var(--cm-gutter-activeLineTextColor)"},"&.cm-foldGutter .cm-gutterElement > .fold-icon":{cursor:"pointer",color:"var(--cm-foldGutter-textColor)",transform:"translateY(2px)","&:hover":{color:"var(--cm-foldGutter-textColorHover)"}}},".cm-foldGutter .cm-gutterElement":{padding:"0 4px"}})}const wt=new yn;function Ps(){return Pt(Sn)}function js(){return Pt(ws)}function At(t){return[Cs(),t==="dark"?[ie.theme({},{dark:!0}),js()]:[Ps()]]}const Os={key:"Tab",run:Ls,shift:_n};function Ls({state:t,dispatch:e}){return t.readOnly?!1:(e(t.update(Ns(t,(n,r,s)=>{s.push({from:n,to:r,insert:t.facet(jt)})}),{userEvent:"input.indent"})),!0)}function Ns(t,e){return t.changeByRange(n=>{const r=[],s=t.doc.lineAt(n.from);if(n.from===n.to)e(n.from,void 0,r,s);else if(n.from<n.to&&n.to<=s.to)e(n.from,n.to,r,s);else{let o=-1;for(let a=n.from;a<=n.to;){const l=t.doc.lineAt(a);l.number>o&&(n.empty||n.to>l.from)&&(e(l.from,void 0,r,l),o=l.number),a=l.to+1}}const i=t.changes(r);return{changes:r,range:vn.range(i.mapPos(n.anchor,1),i.mapPos(n.head,1))}})}const Js=In.of((t,e)=>{const n=t.doc.lineAt(e),r=n.text.lastIndexOf("{");if(r===-1)return null;let s=0;for(let i=e+r;i<t.doc.length;i++){const o=t.sliceDoc(i,i+1);if(o==="{")s++;else if(o==="}"&&(s--,s===0))return t.doc.lineAt(i).from>n.from?{from:e+r+1,to:i}:null}return null}),$s=[ie.contentAttributes.of({"aria-label":"Editor"}),As,new bn(Un,[Gn]),qn,En(),wn(),An(),Cn(),Pn(),jn(),On(),Ln(),Nn(),Jn(),jt.of("	"),Ot.tabSize.of(2),$n({closeOnBlur:!1}),kn.of([...Rn,...Fn,...Dn,{key:"Tab",run:Tn},Os]),Js,Mn({markerDOM:t=>{const e=document.createElement("div");return e.className=`fold-icon ${t?"i-ph-caret-down-bold":"i-ph-caret-right-bold"}`,e}})];function ks({theme:t,doc:e,onChange:n}){const r=_.useRef(null),s=_.useRef(null),i=_.useRef(n);return i.current=n,_.useEffect(()=>{if(!r.current)return;const o=new ie({state:Ot.create({doc:e,extensions:[...$s,wt.of(At(t)),ie.updateListener.of(a=>{a.docChanged&&i.current?.(a.state.doc.toString())})]}),parent:r.current});return s.current=o,()=>{o.destroy(),s.current=null}},[]),_.useEffect(()=>{s.current?.dispatch({effects:wt.reconfigure(At(t))})},[t]),_.useEffect(()=>{const o=s.current;if(!o)return;const a=o.state.doc.toString();a!==e&&o.dispatch({changes:{from:0,to:a.length,insert:e}})},[e]),m.jsx("div",{ref:r,style:{height:"100%"}})}function Rs({files:t,activeFile:e,onSwitchFile:n,onCreateFile:r,onDeleteFile:s}){const[i,o]=_.useState(!1),[a,l]=_.useState("");function p(){let d=a.trim();d&&(d.endsWith(".jscripto")||(d+=".jscripto"),!t.some(c=>c.name===d)&&(r(d),l(""),o(!1)))}return m.jsxs("div",{className:"pg-filetree",children:[t.map(d=>m.jsxs("div",{className:`pg-file-item${d.name===e?" active":""}`,onClick:()=>n(d.name),children:[m.jsx("span",{className:"pg-file-name",children:d.name}),t.length>1&&m.jsx("button",{className:"pg-file-delete",onClick:c=>{c.stopPropagation(),s(d.name)},title:"Excluir arquivo",children:"×"})]},d.name)),i?m.jsx("div",{className:"pg-new-file-input",children:m.jsx("input",{autoFocus:!0,value:a,onChange:d=>l(d.target.value),onKeyDown:d=>{d.key==="Enter"&&p(),d.key==="Escape"&&(o(!1),l(""))},placeholder:"nome.jscripto"})}):m.jsx("button",{className:"pg-new-file-btn",onClick:()=>o(!0),title:"Novo arquivo",children:"+ arquivo"})]})}function Ct({onHide:t,className:e}){return m.jsxs("div",{className:`pg-panel pg-table-panel${e?` ${e}`:""}`,children:[m.jsxs("div",{className:"pg-panel-header",children:["Funcionalidades",m.jsx("button",{className:"pg-toggle",onClick:t,title:"Ocultar",children:"×"})]}),m.jsxs("div",{className:"pg-table-body",children:[m.jsx("p",{className:"pg-table-section",children:"Keywords"}),m.jsxs("table",{className:"pg-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"JavaScripto"}),m.jsx("th",{children:"JavaScript"})]})}),m.jsx("tbody",{children:Wr.map(n=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:n.pt})}),m.jsx("td",{children:m.jsx("code",{children:n.js})})]},n.pt))})]}),m.jsx("p",{className:"pg-table-section",children:"Métodos"}),m.jsxs("table",{className:"pg-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"JavaScripto"}),m.jsx("th",{children:"JavaScript"})]})}),m.jsx("tbody",{children:Vr.map(n=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:n.pt})}),m.jsx("td",{children:m.jsx("code",{children:n.js})})]},n.pt))})]})]})]})}function Fs({theme:t,jsOutput:e,transpileError:n,showTable:r,onShowTable:s}){return m.jsxs("div",{className:"pg-panel pg-js-panel",children:[m.jsxs("div",{className:"pg-panel-header",children:[m.jsx("span",{className:"pg-lang-dot pg-lang-dot-js"}),"JavaScript",!r&&m.jsx("button",{type:"button",className:"pg-toggle-show",onClick:s,children:"≡ funcionalidades"})]}),n?m.jsx("pre",{className:"pg-js-error",children:n}):m.jsx("div",{className:"pg-codemirror",children:m.jsx(Bn,{theme:t,id:"js-output",doc:{value:e,loading:!1,filePath:"/output.js"}})})]})}function Ds({status:t}){return t==="idle"?m.jsx("div",{className:"inline-block mr-2 i-ph-circle-duotone scale-120 text-tk-elements-status-disabled-iconColor"}):t==="running"?m.jsx("div",{className:"inline-block mr-2 i-svg-spinners-90-ring-with-bg scale-105 text-tk-elements-status-active-iconColor"}):t==="completed"?m.jsx("div",{className:"inline-block mr-2 i-ph-check-circle-duotone scale-120 text-tk-elements-status-positive-iconColor"}):m.jsx("div",{className:"inline-block mr-2 i-ph-x-circle-duotone scale-120 text-tk-elements-status-negative-iconColor"})}function Ts(t){switch(t){case"completed":return"text-tk-elements-status-positive-textColor";case"failed":return"text-tk-elements-status-negative-textColor";case"idle":return"text-tk-elements-status-disabled-textColor";case"running":return"text-tk-elements-status-active-textColor"}}function Ms({wcStatus:t}){const e=[{title:"Iniciando WebContainer",status:t==="booting"?"running":"completed"},{title:"Instalando dependências",status:t==="booting"?"idle":t==="installing"?"running":t==="ready"?"completed":"failed"}];return m.jsx("div",{className:"pg-boot-screen",children:m.jsx("ul",{className:"pg-boot-steps",children:e.map((n,r)=>m.jsxs("li",{className:"pg-boot-step",children:[m.jsx(Ds,{status:n.status}),m.jsx("span",{className:Ts(n.status),children:n.title})]},r))})})}function Bs({theme:t,wcStatus:e,onTerminalReady:n}){const r=_.useRef(null);return m.jsxs("div",{className:"pg-terminal-panel",children:[m.jsxs("div",{className:"pg-panel-header",children:[m.jsx("span",{children:"Saída"}),e==="error"&&m.jsx("span",{className:"pg-status text-tk-elements-status-negative-textColor",children:"Erro ao inicializar o WebContainer."})]}),m.jsxs("div",{className:"pg-terminal-body",children:[e!=="ready"&&m.jsx(Ms,{wcStatus:e}),m.jsx(zn,{ref:r,theme:t,readonly:!0,onTerminalReady:n,className:"pg-xterm"})]})]})}function qs({onSelect:t}){return m.jsxs("select",{title:"template-select",className:"pg-template-select",value:"",onChange:e=>{const n=bt.find(r=>r.label===e.target.value);n&&t(n.code)},children:[m.jsx("option",{value:"",disabled:!0,children:"Templates"}),bt.map(e=>m.jsx("option",{value:e.label,children:e.label},e.label))]})}const Us=`import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Todas as lições usam o mesmo mainCommand para que o TutorialKit reutilize
// este processo em vez de matá-lo e criar outro. Isso mantém o pipe entre
// stdout e o painel "Saída" conectado durante toda a sessão.
//
// O polling (setInterval) detecta mudanças no arquivo — seja por edição do
// aluno ou por troca de lição (quando o TutorialKit sobrescreve o arquivo).
//
// O TutorialKit roda o prepareCommand ("npm install") do meta.md raiz uma vez
// no boot e não re-executa ao trocar de lição (desde que os comandos sejam
// idênticos). Esta verificação serve apenas como fallback de segurança.
if (!existsSync('node_modules/ohm-js')) {
  execSync('npm install', { stdio: 'inherit' });
}

const { transpile } = await import('./transpiler.js');

const file = process.argv[2] || 'programa.jscripto';
let lastContent = '';
let debounceTimer;

function transpileOthers() {
  for (const name of readdirSync('.')) {
    if (!name.endsWith('.jscripto') || name === file) continue;
    try {
      const src = readFileSync(name, 'utf-8');
      writeFileSync(name.replace('.jscripto', '.js'), transpile(src));
    } catch {
      // ignora erros em outros arquivos
    }
  }
}

function execute(source) {
  console.clear();

  const expected = existsSync('_expected.txt')
    ? readFileSync('_expected.txt', 'utf-8').trim()
    : null;

  try {
    transpileOthers();
    const js = transpile(source);
    let actual = null;

    if (/^(import|export)\\b/m.test(js)) {
      writeFileSync('_programa.mjs', js);
      try {
        if (expected !== null) {
          const output = execSync('node _programa.mjs', { encoding: 'utf-8' });
          process.stdout.write(output);
          actual = output.trim();
        } else {
          execSync('node _programa.mjs', { stdio: 'inherit' });
        }
      } catch (e) {
        if (e.stdout) process.stdout.write(e.stdout);
        if (e.stderr) process.stderr.write(e.stderr);
      }
    } else {
      if (expected !== null) {
        const lines = [];
        const origLog = console.log;
        console.log = (...args) => {
          const line = args.map(String).join(' ');
          lines.push(line);
          origLog(...args);
        };
        try {
          new Function(js)();
        } finally {
          console.log = origLog;
        }
        actual = lines.join('\\n');
      } else {
        new Function(js)();
      }
    }

    if (expected !== null && actual !== null) {
      console.log(
        actual === expected
          ? '\\n\\x1b[1;32m✓\\x1b[0m Correto!'
          : '\\n\\x1b[1;31m⨯\\x1b[0m Saída incorreta. Tente novamente.',
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}

function check() {
  let source;

  try {
    source = readFileSync(file, 'utf-8');
  } catch {
    // arquivo pode não existir durante troca de lição
    lastContent = '';
    return;
  }

  if (source !== lastContent) {
    lastContent = source;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => execute(source), 300);
  }
}

// executa imediatamente se o arquivo já existir
try {
  const source = readFileSync(file, 'utf-8');
  lastContent = source;
  execute(source);
} catch {
  // arquivo não existe ainda, espera o polling encontrá-lo
}

setInterval(check, 500);

// mantém o processo vivo
process.stdin.resume();
`,Gs=`import { readFileSync } from 'node:fs';
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
  divida: 'split',
  inverta: 'reverse',
  junta: 'join',
};

// Mapa de tradução: identificadores pt-BR → JavaScript (builtins)
const identifierMap = {
  Erro: 'Error',
  Promessa: 'Promise',
};

semantics.addOperation('toJS()', {
  Program(statements) {
    return statements.children.map(s => s.toJS()).join('\\n');
  },

  // Módulos
  ImportStatement_withClause(_importe, clause, _de, path, _semi) {
    const jsPath = path.toJS().replace(/\\.jscripto"$/, '.js"');
    return \`import \${clause.toJS()} from \${jsPath};\`;
  },

  ImportStatement_sideEffect(_importe, path, _semi) {
    return \`import \${path.toJS()};\`;
  },

  ImportClause_namespace(_star, _como, name) {
    return \`* as \${name.toJS()}\`;
  },

  ImportClause_named(_lb, specs, _rb) {
    const items = specs.asIteration().children.map(s => s.toJS()).join(', ');
    return \`{ \${items} }\`;
  },

  ImportClause_default(name) {
    return name.toJS();
  },

  ImportSpecifier_renamed(local, _como, remote) {
    return \`\${local.toJS()} as \${remote.toJS()}\`;
  },

  ImportSpecifier_simple(name) {
    return name.toJS();
  },

  ExportStatement_default(_exporte, _padrao, expr, _semi) {
    return \`export default \${expr.toJS()};\`;
  },

  ExportStatement_named(_exporte, _lb, specs, _rb, _semi) {
    const items = specs.asIteration().children.map(s => s.toJS()).join(', ');
    return \`export { \${items} };\`;
  },

  ExportStatement_func(_exporte, decl) {
    return \`export \${decl.toJS()}\`;
  },

  ExportStatement_var(_exporte, decl) {
    return \`export \${decl.toJS()}\`;
  },

  ExportStatement_class(_exporte, decl) {
    return \`export \${decl.toJS()}\`;
  },

  ExportSpecifier_renamed(local, _como, remote) {
    return \`\${local.toJS()} as \${remote.toJS()}\`;
  },

  ExportSpecifier_simple(name) {
    return name.toJS();
  },

  // Declarações de variáveis
  VariableDeclaration_destructObject(kind, pattern, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return \`\${jsKind} \${pattern.toJS()} = \${expr.toJS()};\`;
  },

  VariableDeclaration_destructArray(kind, pattern, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return \`\${jsKind} \${pattern.toJS()} = \${expr.toJS()};\`;
  },

  VariableDeclaration_simple(kind, name, _eq, expr, _semi) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return \`\${jsKind} \${name.toJS()} = \${expr.toJS()};\`;
  },

  ObjectPattern(_lb, names, _rb) {
    const items = names.asIteration().children.map(n => n.toJS()).join(', ');
    return \`{\${items}}\`;
  },

  ArrayPattern(_lb, names, _rb) {
    const items = names.asIteration().children.map(n => n.toJS()).join(', ');
    return \`[\${items}]\`;
  },

  ExpressionStatement(expr, _semi) {
    return \`\${expr.toJS()};\`;
  },

  // Condicional
  IfStatement(_se, _lp, cond, _rp, block, elseClause) {
    let js = \`if (\${cond.toJS()}) \${block.toJS()}\`;
    if (elseClause.children.length > 0) {
      js += \` \${elseClause.children[0].toJS()}\`;
    }
    return js;
  },

  ElseClause_elseIf(_senao, ifStmt) {
    return \`else \${ifStmt.toJS()}\`;
  },

  ElseClause_else(_senao, block) {
    return \`else \${block.toJS()}\`;
  },

  // Laços
  WhileStatement(_enquanto, _lp, cond, _rp, block) {
    return \`while (\${cond.toJS()}) \${block.toJS()}\`;
  },

  ForStatement(_para, _lp, init, _s1, cond, _s2, update, _rp, block) {
    return \`for (\${init.toJS()}; \${cond.toJS()}; \${update.toJS()}) \${block.toJS()}\`;
  },

  ForInit_varDecl(kind, name, _eq, expr) {
    const jsKind = kind.sourceString === 'deixe' ? 'let' : 'const';
    return \`\${jsKind} \${name.toJS()} = \${expr.toJS()}\`;
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
    let js = \`try \${block.toJS()}\`;
    if (catchClause.children.length > 0) {
      js += \` \${catchClause.children[0].toJS()}\`;
    }
    if (finallyClause.children.length > 0) {
      js += \` \${finallyClause.children[0].toJS()}\`;
    }
    return js;
  },

  CatchClause(_capture, _lp, param, _rp, block) {
    return \`catch (\${param.toJS()}) \${block.toJS()}\`;
  },

  FinallyClause(_finalmente, block) {
    return \`finally \${block.toJS()}\`;
  },

  ThrowStatement(_lance, expr, _semi) {
    return \`throw \${expr.toJS()};\`;
  },

  // Escolha (switch)
  SwitchStatement(_escolha, _lp, expr, _rp, _lb, cases, defaultClause, _rb) {
    const casesJs = cases.children.map(c => c.toJS()).join('\\n');
    const defaultJs = defaultClause.children.length > 0 ? '\\n' + defaultClause.children[0].toJS() : '';
    return \`switch (\${expr.toJS()}) {\\n\${casesJs}\${defaultJs}\\n}\`;
  },

  CaseClause(_caso, expr, _colon, statements) {
    const stmts = statements.children.map(s => s.toJS()).join('\\n');
    return \`case \${expr.toJS()}:\\n\${stmts}\`;
  },

  DefaultClause(_padrao, _colon, statements) {
    const stmts = statements.children.map(s => s.toJS()).join('\\n');
    return \`default:\\n\${stmts}\`;
  },

  // Funções
  FunctionDeclaration_async(_assincrono, _funcao, name, _lp, params, _rp, block) {
    return \`async function \${name.toJS()}(\${params.toJS()}) \${block.toJS()}\`;
  },

  FunctionDeclaration_sync(_funcao, name, _lp, params, _rp, block) {
    return \`function \${name.toJS()}(\${params.toJS()}) \${block.toJS()}\`;
  },

  Params(list) {
    return list.asIteration().children.map(p => p.toJS()).join(', ');
  },

  ReturnStatement(_retorne, expr, _semi) {
    if (expr.children.length > 0) {
      return \`return \${expr.children[0].toJS()};\`;
    }
    return 'return;';
  },

  // Classes
  ClassDeclaration(_classe, name, body) {
    return \`class \${name.toJS()} \${body.toJS()}\`;
  },

  ClassBody(_lb, methods, _rb) {
    const body = methods.children.map(m => m.toJS()).join('\\n');
    return \`{\\n\${body}\\n}\`;
  },

  MethodDefinition_constructor(_construtor, _lp, params, _rp, block) {
    return \`constructor(\${params.toJS()}) \${block.toJS()}\`;
  },

  MethodDefinition_asyncMethod(_assincrono, name, _lp, params, _rp, block) {
    return \`async \${name.toJS()}(\${params.toJS()}) \${block.toJS()}\`;
  },

  MethodDefinition_method(name, _lp, params, _rp, block) {
    return \`\${name.toJS()}(\${params.toJS()}) \${block.toJS()}\`;
  },

  // Blocos
  Block(_lb, statements, _rb) {
    const body = statements.children.map(s => s.toJS()).join('\\n');
    return \`{\\n\${body}\\n}\`;
  },

  EmptyStatement(_semi) {
    return ';';
  },

  // Expressões
  AssignmentExpression_asyncArrow(_assincrono, params, _arrow, body) {
    return \`async \${params.toJS()} => \${body.toJS()}\`;
  },

  AssignmentExpression_arrow(params, _arrow, body) {
    return \`\${params.toJS()} => \${body.toJS()}\`;
  },

  ArrowParams_parens(_lp, params, _rp) {
    return \`(\${params.toJS()})\`;
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
    return \`\${lhs.toJS()} += \${expr.toJS()}\`;
  },

  AssignmentExpression_subAssign(lhs, _op, expr) {
    return \`\${lhs.toJS()} -= \${expr.toJS()}\`;
  },

  AssignmentExpression_mulAssign(lhs, _op, expr) {
    return \`\${lhs.toJS()} *= \${expr.toJS()}\`;
  },

  AssignmentExpression_divAssign(lhs, _op, expr) {
    return \`\${lhs.toJS()} /= \${expr.toJS()}\`;
  },

  AssignmentExpression_assign(lhs, _eq, expr) {
    return \`\${lhs.toJS()} = \${expr.toJS()}\`;
  },

  TernaryExpression_ternary(cond, _q, thenExpr, _colon, elseExpr) {
    return \`\${cond.toJS()} ? \${thenExpr.toJS()} : \${elseExpr.toJS()}\`;
  },

  LogicalOrExpression_or(left, _op, right) {
    return \`\${left.toJS()} || \${right.toJS()}\`;
  },

  LogicalAndExpression_and(left, _op, right) {
    return \`\${left.toJS()} && \${right.toJS()}\`;
  },

  EqualityExpression_eq(left, _op, right) {
    return \`\${left.toJS()} === \${right.toJS()}\`;
  },

  EqualityExpression_neq(left, _op, right) {
    return \`\${left.toJS()} !== \${right.toJS()}\`;
  },

  EqualityExpression_looseEq(left, _op, right) {
    return \`\${left.toJS()} == \${right.toJS()}\`;
  },

  EqualityExpression_looseNeq(left, _op, right) {
    return \`\${left.toJS()} != \${right.toJS()}\`;
  },

  ComparisonExpression_lte(left, _op, right) {
    return \`\${left.toJS()} <= \${right.toJS()}\`;
  },

  ComparisonExpression_gte(left, _op, right) {
    return \`\${left.toJS()} >= \${right.toJS()}\`;
  },

  ComparisonExpression_lt(left, _op, right) {
    return \`\${left.toJS()} < \${right.toJS()}\`;
  },

  ComparisonExpression_gt(left, _op, right) {
    return \`\${left.toJS()} > \${right.toJS()}\`;
  },

  AddExpression_add(left, _op, right) {
    return \`\${left.toJS()} + \${right.toJS()}\`;
  },

  AddExpression_sub(left, _op, right) {
    return \`\${left.toJS()} - \${right.toJS()}\`;
  },

  MulExpression_mul(left, _op, right) {
    return \`\${left.toJS()} * \${right.toJS()}\`;
  },

  MulExpression_div(left, _op, right) {
    return \`\${left.toJS()} / \${right.toJS()}\`;
  },

  MulExpression_mod(left, _op, right) {
    return \`\${left.toJS()} % \${right.toJS()}\`;
  },

  UnaryExpression_await(_aguarde, expr) {
    return \`await \${expr.toJS()}\`;
  },

  UnaryExpression_new(_novo, expr) {
    return \`new \${expr.toJS()}\`;
  },

  UnaryExpression_preInc(_op, expr) {
    return \`++\${expr.toJS()}\`;
  },

  UnaryExpression_preDec(_op, expr) {
    return \`--\${expr.toJS()}\`;
  },

  UnaryExpression_not(_op, expr) {
    return \`!\${expr.toJS()}\`;
  },

  UnaryExpression_neg(_op, expr) {
    return \`-\${expr.toJS()}\`;
  },

  UnaryExpression_postInc(expr, _op) {
    return \`\${expr.toJS()}++\`;
  },

  UnaryExpression_postDec(expr, _op) {
    return \`\${expr.toJS()}--\`;
  },

  CallExpression_call(callee, _lp, args, _rp) {
    return \`\${callee.toJS()}(\${args.toJS()})\`;
  },

  CallExpression_member(obj, _dot, prop) {
    const propName = prop.sourceString;
    const translated = methodMap[propName] || propName;
    return \`\${obj.toJS()}.\${translated}\`;
  },

  CallExpression_index(obj, _lb, expr, _rb) {
    return \`\${obj.toJS()}[\${expr.toJS()}]\`;
  },

  Arguments(list) {
    return list.asIteration().children.map(a => a.toJS()).join(', ');
  },

  PrimaryExpression_paren(_lp, expr, _rp) {
    return \`(\${expr.toJS()})\`;
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
    return \`\\\`\${parts.children.map(p => p.toJS()).join('')}\\\`\`;
  },

  templatePart_interp(_open, expr, _close) {
    const src = expr.sourceString;
    const match = grammar.match(src, 'Expression');
    if (match.failed()) return \`\\\${\${src}}\`;
    return \`\\\${\${semantics(match).toJS()}}\`;
  },

  templatePart_chars(chars) {
    return chars.sourceString;
  },

  templateExpr(_chars) {
    return this.sourceString;
  },

  stringLiteral(_open, chars, _close) {
    return \`"\${chars.sourceString}"\`;
  },

  SpreadOrExpr_spread(_dots, expr) {
    return \`...\${expr.toJS()}\`;
  },

  SpreadOrExpr_expr(expr) {
    return expr.toJS();
  },

  ArrayLiteral(_lb, elements, _rb) {
    const items = elements.asIteration().children.map(e => e.toJS()).join(', ');
    return \`[\${items}]\`;
  },

  ObjectLiteral(_lb, props, _rb) {
    const items = props.asIteration().children.map(p => p.toJS()).join(', ');
    return \`{\${items}}\`;
  },

  PropertyOrSpread_spread(_dots, expr) {
    return \`...\${expr.toJS()}\`;
  },

  PropertyOrSpread_prop(prop) {
    return prop.toJS();
  },

  PropertyDef(key, _colon, value) {
    return \`\${key.toJS()}: \${value.toJS()}\`;
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
 * Adiciona indentação ao código JavaScript gerado pelo transpilador.
 * Regras: \`{\` aumenta nível, \`}\` diminui, \`case\`/\`default\` ficam um nível
 * acima do corpo.
 *
 * @param {string} code
 * @returns {string}
 */
function reindent(code) {
  let depth = 0;
  const IND = '  ';
  return code
    .split('\\n')
    .map(line => {
      const t = line.trim();
      if (!t) return '';
      if (t.startsWith('}')) depth = Math.max(0, depth - 1);
      // case / default labels ficam um nível acima do corpo
      if (/^(case\\b[^:]*|default):$/.test(t) && depth > 0) {
        depth--;
        const out = IND.repeat(depth) + t;
        depth++;
        return out;
      }
      const out = IND.repeat(depth) + t;
      if (t.endsWith('{')) depth++;
      return out;
    })
    .join('\\n');
}

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
    const error = new Error(\`Erro de sintaxe: \${matchResult.shortMessage}\`);
    error.name = 'ErroSintaxe';
    throw error;
  }

  return reindent(semantics(matchResult).toJS());
}

export { grammar };
`,zs=`JavaScripto {
  Program = Statement*

  Statement = ImportStatement
            | ExportStatement
            | VariableDeclaration
            | ClassDeclaration
            | IfStatement
            | WhileStatement
            | ForStatement
            | SwitchStatement
            | TryStatement
            | FunctionDeclaration
            | ReturnStatement
            | BreakStatement
            | ContinueStatement
            | ThrowStatement
            | ExpressionStatement
            | Block
            | EmptyStatement

  // Módulos
  ImportStatement = "importe" ImportClause "de" stringLiteral ";"?  -- withClause
                  | "importe" stringLiteral ";"?                     -- sideEffect

  ImportClause = "*" "como" identifier                          -- namespace
               | "{" ListOf<ImportSpecifier, ","> "}"           -- named
               | identifier                                     -- default

  ImportSpecifier = identifier "como" identifier  -- renamed
                  | identifier                    -- simple

  ExportStatement = "exporte" "padrao" Expression ";"?                          -- default
                  | "exporte" "{" ListOf<ExportSpecifier, ","> "}" ";"?         -- named
                  | "exporte" FunctionDeclaration                                -- func
                  | "exporte" VariableDeclaration                                -- var
                  | "exporte" ClassDeclaration                                   -- class

  ExportSpecifier = identifier "como" identifier  -- renamed
                  | identifier                    -- simple

  // Declarações de variáveis
  VariableDeclaration = ("deixe" | "fixe") ObjectPattern "=" Expression ";"?  -- destructObject
                      | ("deixe" | "fixe") ArrayPattern "=" Expression ";"?   -- destructArray
                      | ("deixe" | "fixe") identifier "=" Expression ";"?     -- simple

  ObjectPattern = "{" ListOf<identifier, ","> "}"
  ArrayPattern = "[" ListOf<identifier, ","> "]"

  // Expressão como statement
  ExpressionStatement = Expression ";"?

  // Condicional
  IfStatement = "se" "(" Expression ")" Block ElseClause?
  ElseClause = "senao" IfStatement  -- elseIf
             | "senao" Block        -- else

  // Laços
  WhileStatement = "enquanto" "(" Expression ")" Block

  ForStatement = "para" "(" ForInit ";" Expression ";" ForUpdate ")" Block
  ForInit = ("deixe" | "fixe") identifier "=" Expression  -- varDecl
           | AssignmentExpression                           -- assign
  ForUpdate = AssignmentExpression

  // Controle de fluxo
  BreakStatement = "quebre" ";"?
  ContinueStatement = "continue" ";"?
  ThrowStatement = "lance" Expression ";"?

  // Tratamento de erros
  TryStatement = "tente" Block CatchClause? FinallyClause?
  CatchClause = "capture" "(" identifier ")" Block
  FinallyClause = "finalmente" Block

  // Escolha (switch)
  SwitchStatement = "escolha" "(" Expression ")" "{" CaseClause* DefaultClause? "}"
  CaseClause = "caso" Expression ":" Statement*
  DefaultClause = "padrao" ":" Statement*

  // Funções
  FunctionDeclaration = "assincrono" "funcao" identifier "(" Params ")" Block  -- async
                      | "funcao" identifier "(" Params ")" Block               -- sync
  Params = ListOf<identifier, ",">
  ReturnStatement = "retorne" Expression? ";"?

  // Classes
  ClassDeclaration = "classe" identifier ClassBody
  ClassBody = "{" MethodDefinition* "}"
  MethodDefinition = "construtor" "(" Params ")" Block               -- constructor
                   | "assincrono" identifier "(" Params ")" Block   -- asyncMethod
                   | identifier "(" Params ")" Block                -- method

  // Blocos
  Block = "{" Statement* "}"
  EmptyStatement = ";"

  // Expressões (precedência crescente de cima para baixo)
  Expression = AssignmentExpression

  AssignmentExpression = "assincrono" ArrowParams "=>" ArrowBody  -- asyncArrow
                       | ArrowParams "=>" ArrowBody               -- arrow
                       | CallExpression "+=" AssignmentExpression  -- addAssign
                       | CallExpression "-=" AssignmentExpression  -- subAssign
                       | CallExpression "*=" AssignmentExpression  -- mulAssign
                       | CallExpression "/=" AssignmentExpression  -- divAssign
                       | CallExpression "=" AssignmentExpression   -- assign
                       | TernaryExpression

  ArrowParams = "(" Params ")"  -- parens
              | identifier      -- ident

  ArrowBody = Block              -- block
            | AssignmentExpression  -- expr

  TernaryExpression = LogicalOrExpression "?" Expression ":" TernaryExpression  -- ternary
                    | LogicalOrExpression

  LogicalOrExpression = LogicalOrExpression "||" LogicalAndExpression  -- or
                      | LogicalAndExpression

  LogicalAndExpression = LogicalAndExpression "&&" EqualityExpression  -- and
                       | EqualityExpression

  EqualityExpression = EqualityExpression "===" ComparisonExpression  -- eq
                     | EqualityExpression "!==" ComparisonExpression  -- neq
                     | EqualityExpression "==" ComparisonExpression   -- looseEq
                     | EqualityExpression "!=" ComparisonExpression   -- looseNeq
                     | ComparisonExpression

  ComparisonExpression = ComparisonExpression "<=" AddExpression  -- lte
                       | ComparisonExpression ">=" AddExpression  -- gte
                       | ComparisonExpression "<" AddExpression   -- lt
                       | ComparisonExpression ">" AddExpression   -- gt
                       | AddExpression

  AddExpression = AddExpression "+" MulExpression  -- add
                | AddExpression "-" MulExpression  -- sub
                | MulExpression

  MulExpression = MulExpression "*" UnaryExpression  -- mul
                | MulExpression "/" UnaryExpression  -- div
                | MulExpression "%" UnaryExpression  -- mod
                | UnaryExpression

  UnaryExpression = "aguarde" UnaryExpression  -- await
                  | "novo" CallExpression      -- new
                  | "++" UnaryExpression       -- preInc
                  | "--" UnaryExpression       -- preDec
                  | "!" UnaryExpression        -- not
                  | "-" UnaryExpression        -- neg
                  | CallExpression "++"        -- postInc
                  | CallExpression "--"        -- postDec
                  | CallExpression

  CallExpression = CallExpression "(" Arguments ")"  -- call
                 | CallExpression "." identifier      -- member
                 | CallExpression "[" Expression "]"  -- index
                 | PrimaryExpression

  Arguments = ListOf<SpreadOrExpr, ",">

  PrimaryExpression = "(" Expression ")"  -- paren
                    | "verdadeiro"         -- true
                    | "falso"              -- false
                    | "nulo"               -- null
                    | "isso"               -- this
                    | ObjectLiteral        -- object
                    | ArrayLiteral         -- array
                    | templateLiteral      -- template
                    | stringLiteral        -- string
                    | numberLiteral        -- number
                    | "imprima"            -- imprima
                    | identifier           -- ident

  templateLiteral = "\`" templatePart* "\`"
  templatePart = "\${" templateExpr "}"  -- interp
               | templateChar+          -- chars
  templateExpr = (~"}" any)*
  templateChar = ~("\`" | "\${") any

  // Literais compostos
  ArrayLiteral = "[" ListOf<SpreadOrExpr, ","> "]"
  ObjectLiteral = "{" ListOf<PropertyOrSpread, ","> "}"
  PropertyOrSpread = "..." Expression  -- spread
                   | PropertyDef       -- prop
  PropertyDef = (identifier | stringLiteral) ":" Expression

  SpreadOrExpr = "..." Expression  -- spread
               | Expression        -- expr

  // Tokens
  stringLiteral = "\\"" (~"\\"" any)* "\\""
                | "'" (~"'" any)* "'"

  numberLiteral = digit+ ("." digit+)?

  identifier = ~keyword identStart identPart*
  identStart = letter | "_" | "$"
  identPart = identStart | digit

  keyword = ("deixe" | "fixe" | "funcao" | "retorne"
           | "senao" | "se" | "enquanto" | "para"
           | "verdadeiro" | "falso" | "nulo" | "imprima"
           | "classe" | "novo" | "isso" | "construtor"
           | "quebre" | "continue" | "escolha" | "caso" | "padrao"
           | "tente" | "capture" | "finalmente" | "lance"
           | "assincrono" | "aguarde"
           | "importe" | "exporte" | "de" | "como") ~identPart

  // Espaços e comentários
  space += comment
  comment = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
          | "/*" (~"*/" any)* "*/"            -- multiLine
}
`,Ks=`{
  "name": "javascripto-runner",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node run.js programa.jscripto"
  },
  "dependencies": {
    "ohm-js": "^17.1.0"
  }
}
`;function ei(){const[t,e]=_.useState(()=>document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"),[n,r]=_.useState([{name:"programa.jscripto",content:je}]),[s,i]=_.useState("programa.jscripto"),[o,a]=_.useState(()=>{try{return It(je)}catch{return""}}),[l,p]=_.useState(null),[d,c]=_.useState("booting"),[u,h]=_.useState(!0),[g,v]=_.useState(!1),[I,b]=_.useState("editor"),G=_.useRef(null),H=_.useRef(null),pe=_.useRef(null);_.useEffect(()=>{const y=()=>{const w=document.documentElement.getAttribute("data-theme");(w==="dark"||w==="light")&&e(w)};y();const C=new MutationObserver(y);return C.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>C.disconnect()},[]),_.useEffect(()=>{let y=!0;async function C(){try{const w=await Es();if(!y)return;pe.current=w,await w.mount({"run.js":{file:{contents:Us}},"transpiler.js":{file:{contents:Gs}},"javascripto.ohm":{file:{contents:zs}},"package.json":{file:{contents:Ks}},"programa.jscripto":{file:{contents:je}}}),c("installing");const de=await w.spawn("npm",["install"]);de.output.pipeTo(new WritableStream({write(we){G.current?.write(we)}}));const gn=await de.exit;if(!y)return;if(gn!==0){c("error");return}c("ready"),(await w.spawn("node",["run.js","programa.jscripto"])).output.pipeTo(new WritableStream({write(we){G.current?.write(we)}}))}catch(w){if(!y)return;c("error"),console.error("WebContainer error:",w)}}return C(),()=>{y=!1}},[]);const me=_.useCallback((y,C)=>{pe.current&&pe.current.fs.writeFile(y,C).catch(()=>{})},[]),ot=_.useCallback(y=>{r(C=>C.map(w=>w.name===s?{...w,content:y}:w));try{a(It(y)),p(null)}catch(C){p(C instanceof Error?C.message:String(C))}H.current&&clearTimeout(H.current),H.current=setTimeout(()=>me(s,y),150)},[s,me]),mn=_.useCallback(y=>{y!==s&&i(y)},[s]),dn=_.useCallback(y=>{r(C=>[...C,{name:y,content:""}]),i(y),me(y,"")},[me]),hn=_.useCallback(y=>{n.length!==1&&(r(C=>{const w=C.filter(de=>de.name!==y);return s===y&&i(w[0].name),w}),pe.current?.fs.rm(y).catch(()=>{}))},[n,s]),fn=n.find(y=>y.name===s)?.content??"";return m.jsxs("div",{className:"pg-root","data-mobile-tab":I,children:[m.jsxs("div",{className:"pg-mobile-tabs",children:[m.jsx("button",{type:"button",className:`pg-mobile-tab${I==="editor"?" active":""}`,onClick:()=>b("editor"),children:"Editor"}),m.jsx("button",{type:"button",className:`pg-mobile-tab${I==="output"?" active":""}`,onClick:()=>b("output"),children:"JavaScript"}),m.jsx("button",{type:"button",className:`pg-mobile-tab${I==="table"?" active":""}`,onClick:()=>b("table"),children:"Funcionalidades"})]}),m.jsxs("div",{className:"pg-top",children:[m.jsxs("div",{className:"pg-panel pg-editor-panel",children:[m.jsxs("div",{className:"pg-panel-header",children:[m.jsx("span",{className:"pg-lang-dot"}),"JavaScripto",m.jsx("button",{type:"button",className:"pg-filetree-toggle",onClick:()=>v(y=>!y),title:g?"Mostrar arquivos":"Ocultar arquivos",children:g?"›":"‹"}),m.jsx(qs,{onSelect:y=>{r(C=>C.map(w=>w.name===s?{...w,content:y}:w)),ot(y)}})]}),m.jsxs("div",{className:"pg-editor-body",children:[!g&&m.jsx(Rs,{files:n,activeFile:s,onSwitchFile:mn,onCreateFile:dn,onDeleteFile:hn}),m.jsx("div",{className:"pg-codemirror",children:m.jsx(ks,{theme:t,doc:fn,onChange:ot})})]})]}),u&&m.jsx(Ct,{onHide:()=>h(!1)}),I==="table"&&m.jsx(Ct,{className:"pg-mobile-table-panel",onHide:()=>b("editor")}),m.jsx(Fs,{theme:t,jsOutput:o,transpileError:l,showTable:u,onShowTable:()=>h(!0)})]}),m.jsx(Bs,{theme:t,wcStatus:d,onTerminalReady:y=>{G.current=y}})]})}export{ei as default};
