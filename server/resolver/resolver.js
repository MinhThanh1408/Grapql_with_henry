import mongoDataMethods from '../data/index.js';
export const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args) => await mongoDataMethods.getAllBooks(),

    book: async (parent, { id }) => await mongoDataMethods.getBookById(id),

    authors: async (parent, args) => await mongoDataMethods.getAllAuthors(),
    
    author: async (parent, { id }) => await mongoDataMethods.getAuthorById(id),
  },

  Book: {
    author: async ({ authorId }, args) =>
      await mongoDataMethods.getAuthorById(authorId),
  },

  Author: {
    books: async ({ id }, args) =>
      await mongoDataMethods.getAllBooks({ authorId: id }),
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args) =>
      await mongoDataMethods.createAuthor(args),

    createBook: async (parent, args) => await mongoDataMethods.createBook(args),
  },
};
