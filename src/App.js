import logo from './logo.svg';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';
import Login from './Login';

function App() {
  return (
   <Router>
     <Route exact path="/" component={Login}/>
     <Route exact  path="/homepage" component={HomePage}/>
   </Router>
  );
}

export default App;
