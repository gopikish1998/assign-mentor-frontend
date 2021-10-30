import logo from './logo.svg';
import './App.css';
import AddMentors from './AddMentors';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Mentors from './Mentors';
import AssignStudents from './AssignStudents';


function App() {
  return (
    
    <div className='container'>
      <Router>
        
        <Switch>
          <Route path="/" component={AddMentors} exact="true"/>
          <Route path="/mentors" component={Mentors} exact="true"/>
          <Route path="/assign-students/:id" component={AssignStudents} exact="true"/>
        </Switch>
      </Router>
    </div>    
  );
}

export default App;
