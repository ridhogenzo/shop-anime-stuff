import LandingPage from "./pages/LandingPage";
import DetailsItem from "./pages/DetailsItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/DetailPage" component={DetailsItem}></Route>
      </Router>
    </>
  );
}

export default App;
