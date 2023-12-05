export const exampleSchema = `#graphql
  type Note {
    id: String!
    title: String!
    description: String!
  }

  type Query {
    notes: [Note]!
    note(id: String!): Note
  }
`;