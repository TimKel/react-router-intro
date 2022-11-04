

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Chocolate from './Chocolate';
import Soda from './Soda';


function App() {
  return (
      <main>
      <BrowserRouter>
          <Switch >
            <Route exact path="/Chips">
                <Chips />
            </Route>
            <Route exact path="/Chocolate">
                <Chocolate />
            </Route>
            <Route exact path="/Soda">
                <Soda />
            </Route>
            <Route exact path="/">
                <VendingMachine />
            </Route>
          </Switch>
   
      </BrowserRouter>
      </main>
  );
}

export default App;
