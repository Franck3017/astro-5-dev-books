import { defineCollection, z } from "astro:content"; // importar defineCollection y z de astro:content
// z -> zod schema, para valir schemas, tipos de datos, formas de objetos, etc.

const books = defineCollection({ // definir una colección
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    price: z.number(), // Assuming price is in USD for simplicity
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  })
})

export const collections = { books } // exportar la colección de libros