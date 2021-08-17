import LogoRed from "./components/LogoRed";
import { Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import ScrollDown from "./components/ScrollDown";
import Overlay from "./components/Overlay";
function App() {
  return (
    <div className="app container">
      <header className="header">
        <Link to="/">
          <LogoRed className="logo--red" />
        </Link>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/menu" component={Menu} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <footer>
        <p>footer</p>
      </footer>
      <Cursor />
      <ScrollDown />
      <Overlay />
    </div>
  );
}

export default App;
