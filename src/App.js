import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import SurveyStart from './components/SurveyStart/SurveyStart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/survey/1/a' />
            <Route path='/survey/1/b' />
            <Route path='/survey/1/c' />

            <Route path='/survey/2' />

            <Route path='/survey/3/a' />
            <Route path='/survey/3/b' />
            <Route path='/survey/3/c' />
            <Route path='/' component={SurveyStart}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;