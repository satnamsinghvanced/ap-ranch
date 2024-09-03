import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { RootNavigator } from "./navigator/root.navigator";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <RootNavigator />
    </Router>
  );
}

export default App;
