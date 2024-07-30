import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Switch } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Routes>
          <Route path="/" exact>
            {/* <h1>Welcome to the E-commerce Website</h1> */}
          </Route>
          <Route path="/login">{/* <h1>Login Page</h1> */}</Route>
        </Routes>
      </Switch>
    </Router>
  );
};

export default App;
