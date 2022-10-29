import * as mutation from '../resolvers/mutation'
import * as query from '../resolvers/query';


const resolvers = {
  Query: query,
  Mutation: mutation,
};

export { resolvers };
