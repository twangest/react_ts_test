import React from 'react';
import Navbar from '../Navbar';
import {Switch, Route, Redirect} from 'react-router-dom';
import FormPage from '../../pages/FormPage';
import ColorsPage from '../../pages/ColorsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='main_wrapper'>
      <div className='container'>
        <div className='wrapper'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={FormPage}/>
            <Route exact path='/colors' component={ColorsPage}/>
            <Route path='/'>
              <Redirect to='/'/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
