import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <ProtectedRoute path="/">
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
