import LandingPage from "./pages/LandingPage";
import DetailsItem from "./pages/DetailsItem";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailsItem}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </>
  );
}

export default App;
