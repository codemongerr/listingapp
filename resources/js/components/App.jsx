import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Router>
                    <Switch>
                        <Route path="/signup" component={Signup}></Route>
                        <Route component={Login}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
const elm = document.getElementById("app");
if (elm) {
    ReactDOM.render(<App />, elm);
}
