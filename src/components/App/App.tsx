import React from 'react';
import Navbar from '../Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormPage from '../../pages/FormPage';
import ColorsPage from '../../pages/ColorsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className='container mt-2 col-6'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={FormPage} />
          <Route exact path='/colors' component={ColorsPage} />
          <Route path='/'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
