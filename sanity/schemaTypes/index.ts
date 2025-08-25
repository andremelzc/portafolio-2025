import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import skills from './skills'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skills],
}
