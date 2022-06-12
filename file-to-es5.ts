// 将 js 文件转为 ES5
import { parse } from "@babel/parser";
import { transformFromAstSync } from "@babel/core";
import fs from 'fs'

const code = fs.readFileSync('./test.js').toString()
const ast = parse(code, { sourceType: 'module' })
const result = transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})
fs.writeFileSync('./test.es5.js', result?.code as string)
