import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { RootNavigator } from "./navigator/root.navigator";

function App() {
  return (
    <Router>
      <RootNavigator />
    </Router>
  );
}

export default App;
