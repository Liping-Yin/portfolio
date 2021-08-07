import LogoRed from "./components/LogoRed";
import { Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <div className="container">
        <header className="header row">
          <Link to="/">
            <LogoRed className="logo--red" />
          </Link>
          <Navigation />
        </header>
      </div>
      <main>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
