import React from 'react';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SurveyStart from './components/SurveyStart/SurveyStart';
import SurveyContents from './containers/SurveyContents/SurveyContents';
import SurveyResult from './containers/SurveyResult/SurveyResult';
import AdminPage from './containers/Admin/adminPage/adminPage';
import "./App.css";

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/survey/:questionNum" component={SurveyContents} />
            <Route path="/Result" component={SurveyResult} />
            <Route path="/admin" component={AdminPage} />
            <Route path='/' exact component={SurveyStart}/>
            <Redirect path='*' to='/'/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App);