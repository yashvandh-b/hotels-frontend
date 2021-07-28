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
import Branches from './components/branches'

function App() {
  return (
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact> <Home /> </Route>
        <Route path='/about'> <About /> </Route>
        <Route path='/hotel/new'><AddHotel /></Route>
        <Route path='/hotels' exact><Hotels /></Route>
        <Route path='/signup'><SignUp /></Route>
        <Route path='/hotels/:hotel_id' exact><ShowHotel /></Route>
        <Route path='/hotels/:hotel_id/branches'><Branches /></Route>
        <Route path='/signin'><Signin /></Route>
      </Switch>
    </Router>
  );
}

export default App;
