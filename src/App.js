import "./App.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./component/Cart";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header count={count} />
      </div>
      <Switch>
        <Route exact path="/">
          <Home
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
          />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cart} setCart={setCart} count={count}
            setCount={setCount} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
