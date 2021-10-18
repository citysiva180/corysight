import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
      </Router>
    </div>
  );
}

export default App;
