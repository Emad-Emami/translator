import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { HttpLink } from 'apollo-link-http';
// import { resolvers, typeDefs } from './resolvers';
import Pages from './pages';

const engine = new Styletron();
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
    habitats: [],
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Pages />
      </BaseProvider>
    </StyletronProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

module.hot.accept();
