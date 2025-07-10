import { GraphQLScalarType } from "graphql";
export const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "DateTime description",
  serialize: (value) => {
    return new Date(String(value)).toISOString();
  },
  parseValue: (value) => {
    /* Implement logic to parse input that was sent to the server as variables */
  },
  parseLiteral: (ast) => {
    /* Implement logic to parse input that was sent to the server as literal values (string, number, or boolean) */
  },
});
