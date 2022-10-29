import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from './graphql'
import { APOLLO_SERVER_PORT } from './config/constants';

const schema = {
  typeDefs,
  resolvers,
}

const server = new ApolloServer(schema);

const build = async () => {
  server.listen({ port: APOLLO_SERVER_PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

build();
