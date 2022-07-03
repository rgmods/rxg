const { ApolloServer } = require('apollo-server');

const typeDefs   = require('./schema/');
const resolvers  = require('./resolvers/');
const dataSource = require('./data/');

class GraphQLServer {
  constructor(config = {}) {
    console.assert(config, `MISSING PARAMETER GRAPHQLSETTINGS`);

    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        dataSource: new dataSource(config)
      })
    }).listen(config.GraphQL).then(({ url }) => console.log(`GraphQL Playground live at ${url}`));
  }
}

module.exports = GraphQLServer