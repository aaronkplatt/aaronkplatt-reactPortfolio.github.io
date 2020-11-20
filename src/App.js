import './App.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
//PAGES
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={Portfolio}></Route>
          <Route exact path="/about" component={Contact}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
