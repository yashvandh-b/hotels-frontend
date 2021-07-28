import './App.css';
import Navbar from './components/navbar/index';
import './assets/main.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/home/about';
import AddHotel from './components/hotels/new';
import Hotels from './components/hotels';
import SignUp from './components/user/new';
import Signin from './components/session/signin'
import ShowHotel from './components/hotels/showHotel'

function App() {
  return (
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/hotel/new' component={AddHotel} />
        <Route path='/hotels' component={Hotels} />
        <Route path='/signup' component={SignUp} />
        <Route path='' component={ShowHotel} />
        <Route path='/signin' component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
