import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Footer from './component/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>,
      <Route exact path="/Products" component={Products}/>
      <Route exact path="/Products/:id" component={Product}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
