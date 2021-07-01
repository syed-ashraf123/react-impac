import { Container } from "react-bootstrap";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Door from "./Components/Pages/Door";
import Cabin from "./Components/Pages/Cabin";
import Aboutus from "./Components/Pages/Aboutus";
function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doors" component={Door} />
            <Route exact path="/cabins" component={Cabin} />
            <Route exact path="/aboutus" component={Aboutus} />
          </Switch>

          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
