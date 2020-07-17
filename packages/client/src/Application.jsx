import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/components/DefaultLayout';
import Creatures from './containers/Creatures';
import Generations from './containers/Generations';
import Genes from './containers/Genes';
import Games from './containers/Games';
import useThemeLoader from './hooks/use-theme-loader';

export default function Application() {
  const isThemeLoaded = useThemeLoader();
  if (!isThemeLoaded) {
    return false;
  }
  return (
    <Router>
      <Route path="/">
        {({ history }) => {
          const navLinkGroups = [
            {
              links: [
                {
                  name: 'Home',
                  url: '/',
                  key: '/',
                },
                {
                  name: 'Creatures',
                  url: '/creatures',
                  key: '/creatures',
                },
                {
                  name: 'Generations',
                  url: '/generations',
                  key: '/generations',
                },
                {
                  name: 'Genes',
                  url: '/genes',
                  key: '/genes',
                },
              ],
            },
          ];
          return (
            <DefaultLayout navLinkGroups={navLinkGroups} history={history}>
              <Switch>
                <Route exact path="/" component={Games} />
                <Route path="/creatures" component={Creatures} />
                <Route path="/generations" component={Generations} />
                <Route path="/genes" component={Genes} />
              </Switch>
            </DefaultLayout>
          );
        }}
      </Route>
    </Router>
  );
}
