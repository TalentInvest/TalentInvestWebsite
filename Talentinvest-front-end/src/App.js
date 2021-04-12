import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Landing from './components/Landing.jsx';
import Profile from './components/Profile.jsx';
import Search from './components/Search.jsx'
import Investments from "./components/Investments.jsx"
import Return from "./components/Return.jsx"
import Export from "./components/Export.jsx"

export default function App() {
  return (
    <div>
    
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/investments" component={Investments} />
        <Route exact path="/return" component={Return} />
        <Route exact path="/export" component={Export} />

      </Router>
    </div>
    
    
  );
}
