import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return <h1> Home</h1>
}
const Generos = () => {
  return <h1> Gêneros</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then( res => {
      setData(res.data)
    })
  },[])
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/generos' component={Generos} />
          <pre> {JSON.stringify(data)}</pre>
        </div>
      </Router>
    </div>
  );
}

export default App;
