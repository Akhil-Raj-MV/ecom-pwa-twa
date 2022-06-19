import React from "react";
import {Switch} from 'react-router-dom'
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { ProfileProvider } from "./context/profile.context";

function App() {
  return (
    <div className="App">
        <ProfileProvider>
            <Switch>
                <PublicRoute path="/signin">
                  <SignIn/>
                </PublicRoute>
                <PrivateRoute path="/">
                  <Home/>
                </PrivateRoute>
              </Switch>
        </ProfileProvider>
    </div>
  );
}

export default App;
