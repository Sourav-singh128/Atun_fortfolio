import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'qualification',
      type: 'string',
    }),
    defineField({
      name: 'marquee',
      type: 'string',
    }),
  ],
})
