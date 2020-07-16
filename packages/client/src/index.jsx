import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import { resolvers, typeDefs } from './resolvers';
import Application from './Application';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  // resolvers,
  // typeDefs,
});

cache.writeData({
  data: {
    creatures: [],
    generations: [],
    genes: [],
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>,
  document.getElementById('root'),
);

module.hot.accept();
