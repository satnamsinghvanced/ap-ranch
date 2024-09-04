import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { RootNavigator } from "./navigator/root.navigator";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { persistor, store } from "./store/reducer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <RootNavigator />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
