import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Characters from './Characters';
import Tales from './Tales';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Characters" component={Characters}/>
          <Route exact path="/Tales" component={Tales} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
