import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { Header } from './components/Header/Header';
import {Movies} from './Pages/Movies';
import { Shows } from './Pages/Shows';
import { Search } from './Pages/Search';
import { Trending } from './Pages/Trending/Trending';
import { Container } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact />
          <Route path='/movies' component={Movies} />
          <Route path='/shows' component={Shows} />
          <Route path='/search' component={Search} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
