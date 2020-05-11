import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import UserList from "./containers/UserList";
import UserEdit from "./containers/UserEdit";
import Header from "./containers/Header";
import { getLocalStorageItem } from "./helper";

function App() {
    const [userData, setUserData] = useState(getLocalStorageItem("user"));
    return (
        <Router>
            {userData ? (
                <Header username={userData.name} handleUserData={setUserData} />
            ) : (
                ""
            )}
            <div className="container">
                <div className="row justify-content-center">
                    {userData ? (
                        <Switch>
                            <Route path="/user/:id">
                                <UserEdit
                                    token={userData && userData.token}
                                    isAdmin={userData && userData.is_admin}
                                />
                            </Route>
                            <Route>
                                <UserList
                                    token={userData && userData.token}
                                    isAdmin={userData && userData.is_admin}
                                />
                            </Route>
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/signup" component={Signup} />
                            <Route>
                                <Login handleUserData={setUserData} />
                            </Route>
                        </Switch>
                    )}
                </div>
            </div>
        </Router>
    );
}

export default App;

const elm = document.getElementById("app");
if (elm) {
    ReactDOM.render(<App />, elm);
}
