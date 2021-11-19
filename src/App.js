import logo from './logo.svg';
 import './App.css';
 import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Component/Home';
import CreateCust from './Component/CreateCust';
import DisplayCust from './Component/DisplayCust';
import UpdateCust from './Component/UpdateCust';


function App() {
  return (
    <Router>
    <div className="App" >
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/back" component={Home}/>
         <Route path="/insertEmp" exact component={CreateCust}/> 
         <Route path="/fetchEmp" component={DisplayCust}/>
        <Route path="/updateEmp/:id" component={UpdateCust}/> 
        
<h1>HELLO WORLD</h1>
      </Switch> 

      
    </div>
    </Router>
  );
}

export default App;
