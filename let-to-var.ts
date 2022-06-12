// 手动将 let 转为 var
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

const code = `let a = 'hello'; let b = 2`
const ast = parse(code, { sourceType: 'module' })
traverse(ast, {
  enter(item) {
    if (item.node.type === 'VariableDeclaration') {
      if (item.node.kind === 'let') {
        item.node.kind = 'var'
      }
    }
  }
})

const result = generate(ast, {}, code)

console.log(result.code)
// => var a = 'hello';\nvar b = 2;