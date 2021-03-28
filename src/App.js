import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Landing from './components/Landing.jsx';
import Profile from './components/Profile.jsx';
import Search from './components/Search.jsx'
export default function App() {
  return (
    <div>
    
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
      </Router>
    </div>
    
    
  );
}
