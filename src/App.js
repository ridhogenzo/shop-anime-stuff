import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </>
  );
}

export default App;
