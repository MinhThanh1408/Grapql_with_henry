export const typeDefs = `#graphql
  type Query {
    books: [Book]
  }
  
  type Book {
    id: ID
    name: String
    genre: String
  }
`;
