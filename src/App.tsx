import './App.css';
import FullCartPage from './pages/fullCart';
import MoviesPage from './pages/movies';
import SucessBuyPage from './pages/sucessBuy';

import { Route, Switch } from "react-router-dom";
import Provider from './context/provider';


function App() {
  return (
    <Provider>
      <Switch>

      <Route exact path={"/"}>
      <MoviesPage />
      </Route>

      <Route path={"/cart"}>
      <FullCartPage />
      </Route>

      <Route path={"/successBuy"}>
      <SucessBuyPage />
      </Route>

      </Switch>
      </Provider>

  );
}

export default App;
