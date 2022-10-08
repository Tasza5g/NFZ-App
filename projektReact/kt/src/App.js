import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ListaKontaktow from './components/ListaKontaktow';
import DodajKontakt from './components/DodajKontakt';
import UsunKontakt from './components/UsunKontakt';
import EdytujKontakt from './components/EdytujKontakt';

class App extends Component{

  render(){

    return(
      <div>

        <h1>Książka tefoniczna</h1>

        <BrowserRouter>
        <ul>
          <li>
            <a href="/">Lista kontaktow</a>
          </li>
          <li>
            <a href="/dodaj">Dodaj nowy kontakt</a>
          </li>
        </ul>

        <Switch>

          <Route exact path="/" component={ListaKontaktow} />
          <Route path="/dodaj" component={DodajKontakt} />
          <Route path="/usun/:id" component={UsunKontakt} />
          <Route path="/edytuj/:id" component={EdytujKontakt} />


        </Switch>
        </BrowserRouter>

      </div>
    )

  }

}

export default App;
