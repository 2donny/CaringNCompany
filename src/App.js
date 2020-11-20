import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import SurveyStart from './components/SurveyStart/SurveyStart';
import SurveyContents from './containers/SurveyContents/SurveyContents';
import SurveyResult from './containers/SurveyResult/SurveyResult';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/survey/:questionNum" component={SurveyContents} />
            <Route path="/Result" component={SurveyResult} />
            <Route path='/' exact component={SurveyStart}/>
            <Redirect path='*' to='/'/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;