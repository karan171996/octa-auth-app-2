import './App.css'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'; // Import createBrowserHistory

//Components
import Home from './components/Home'

const history = createBrowserHistory(); // Create a history object

function App() {
  return (
    <Router history={history}>
      {/* Define your routes here */}
      <Switch>
            <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
