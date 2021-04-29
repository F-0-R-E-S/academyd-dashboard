import {Provider} from 'react-redux';
import {store} from './store/configureStore'
import './App.css';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import LoginPage from "./screen/logIn";
import { ToastContainer } from 'react-toastify'
import Home from "./screen/HomePage";
import {useEffect} from "react";
import ChekTestPage from "./screen/CheckTestPage";
import BlogPage from "./screen/BlogPage";
import TestPage from "./screen/TestPage";
import CastomerPage from "./screen/CustomerPage";

function App() {

    let history = useHistory()


  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <div className="main">
                      <Switch>
                          <Route path="/" exact component={LoginPage}/>
                          <Route path="/home" exact component={Home}/>
                          <Route path="/chek-test" exact component={ChekTestPage}/>
                          <Route path="/blog" exact component={BlogPage}/>
                          <Route path="/all-test" exact component={TestPage}/>
                          <Route path="/all-customer" exact component={CastomerPage}/>
                      </Switch>
                  </div>
              </div>
          </Router>
          <ToastContainer />
      </Provider>
  );
}

export default App;
