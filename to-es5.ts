// 自动将代码转为 ES5
import { parse } from "@babel/parser";
import { transformFromAstSync } from "@babel/core";

const code = `let a = 'hello'; let b = 1; const c = 2;`
const ast = parse(code, { sourceType: 'module' })
const result = transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})

console.log(result?.code)
/**
 * "use strict";
 * var a = 'hello';
 * var b = 1;
 * var c = 2;
 * Done in 1.81s.
 */