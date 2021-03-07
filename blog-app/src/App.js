import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Profile from './components/Profile';
import Feed from './components/Feed';
import Archive from './components/Archive';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to='/archive'>Archive</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/feed'>Feed</Link>

          <Route exact path='/profile' component={Profile} />
          <Route exact path='/feed' component={Feed} />
          <Route exact path='/archive' component={Archive} />
        </Router>
      </header>
      

    </div>
  );
}

export default App;
