

import { BrowserRouter, Route, Link } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Chocolate from './Chocolate';
import Soda from './Soda';


function App() {
  return (
      <main>
      <BrowserRouter>
      <h2><Link to="/Chocolate">Chocolate x2</Link></h2>
            <Route exact path="/">
                <VendingMachine />
            </Route>
            <Route exact path="/Chips">
                <Chips />
            </Route>
            <Route exact path="/Chocolate">
                <Chocolate />
            </Route>
            <Route exact path="/Soda">
                <Soda />
            </Route>
   
      </BrowserRouter>
      </main>
  );
}

export default App;
