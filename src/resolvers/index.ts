import { Resolvers } from "../__generated__/resolvers-types";
import Query from "./queries.js";
import { GraphQLScalarType, Kind } from 'graphql';

const TimpestampScalar = new GraphQLScalarType({
    name: 'Timestamp',
    description: 'Timestamp custom scalar type',

    // converts the scalar's back-end representation to a JSON-compatible format so Apollo Server can include it in an operation response
    serialize(value) {
        if (typeof value === 'number') {
            return new Date(value); // Convert incoming integer to Date
        }
        throw Error(`GraphQL ${this.name} Scalar serializer expected a 'Number' object`);
    },

    // converts the scalar's JSON value to its back-end representation before it's added to a resolver's args
    parseValue(value) { 
        if (value instanceof Date) {
            return value.getTime();
        // } else if (typeof value === 'number') {
        //     return new Date(value); // Convert incoming integer to Date
        }
        throw Error(`GraphQL ${this.name} Scalar parser expected a 'Date' object`);
    },

    // When an incoming query string includes the scalar as a hard-coded argument value, that value is part of the query document's abstract syntax tree (AST). 
    // Apollo Server calls the parseLiteral method to convert the value's AST representation to the scalar's back-end representation
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        // Convert hard-coded AST string to integer and then to Date
        return Date.parse(ast.value);
      }
      // Invalid hard-coded value (not an integer)
      return null;
    },
    
});

// Note this "Resolvers" type isn't strictly necessary because we are already
// separately type checking our queries and resolvers. However, the "Resolvers"
// generated types is useful syntax if you are defining your resolvers
// in a single file.
const resolvers: Resolvers = {
    Timestamp: TimpestampScalar, 
    Query 
};

export default resolvers;
