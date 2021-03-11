import './App.css';
import { BrowserRouter as Router, Route, Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from "react-scroll";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Sidebar />
          <Navbar />
        </Router>
      </header>
      

    </div>
  );
}

export default App;
