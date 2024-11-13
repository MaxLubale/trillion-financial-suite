import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import Trifone from './components/trifone';
import TrillionBank from './components/trillionbank';
import Trillionit from './components/trillionit';
import Trillipay from './components/trillipay';
import Blokchain from './components/blockchain';
import Pay from './components/pay';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trillipay" component={Trillipay} />
        <Route path="/trillionbank" component={TrillionBank} />
        <Route path="/trifone" component={Trifone} />
        <Route path="/blokchain" component={Blokchain} />
        <Route path="/trillionit" component={Trillionit} />
        <Route path="/pay" component={Pay} />
        <Route component={NotFound} />
        <Redirect to="**" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
