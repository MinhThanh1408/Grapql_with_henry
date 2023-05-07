export const typeDefs = `#graphql
  type Query {
    books: [Book]
    book: Book
    authors: [Author]
    author: Author
  }
  
  type Mutation{
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
  }
  
  type Book {
    id: ID!
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
`;
