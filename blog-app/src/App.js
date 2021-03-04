import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Profile from './components/Profile';
import Feed from './components/Feed';
import Archive from './components/Archive';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/archive'>Archive</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/feed'>Feed</Link>

          <Route path='/profile' component={Profile} />
          <Route path='/feed' component={Feed} />
          <Route path='/archive' component={Archive} />
        </BrowserRouter>
      </header>
      

    </div>
  );
}

export default App;
