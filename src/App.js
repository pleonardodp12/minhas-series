import React from 'react';
import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import Series from './Series';
import NovoSerie from './NovoSerie';
import InfoSerie from './InfoSerie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditarGenero from './EditarGenero';

const Home = () => {
  return <h1> Home</h1>
}

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/generos' exact component={Generos} />
            <Route path='/generos/novo' exact component={NovoGenero} />
            <Route path='/generos/:id' exact component={EditarGenero} />
            <Route path='/series' exact component={Series} />
            <Route path='/series/novo' exact component={NovoSerie} />
            <Route path='/series/:id' exact component={InfoSerie} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
