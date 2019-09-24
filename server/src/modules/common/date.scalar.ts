import { CustomScalar, Scalar } from '@nestjs/graphql'
import { Kind, ASTNode } from 'graphql'

@Scalar('Date', of => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = `ISO8601 DateTime String (but unix timestamp will also be accepted`

  parseValue(value: string): Date {
    return new Date(value)
  }

  serialize(value: Date): string {
    return value.toISOString()
  }

  parseLiteral(ast: ASTNode): Date {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value)
    }

    if (ast.kind === Kind.INT) {
      return new Date(ast.value)
    }

    throw Error(`AST value ${ast} is not a string.`)
  }
}
