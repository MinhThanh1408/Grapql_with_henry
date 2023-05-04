export const resolvers = {
  Query: {
    books: () => [
        {
            id: 1,
            name: 'Sach co id la 1',
            genre: 'Education',
        },
        {
            id: 2,
            name: 'Sach co id la 2',
            genre: 'Education',
        },
    ],
  },
};
