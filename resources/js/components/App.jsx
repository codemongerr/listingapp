import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>
                        <div className="card-body">I'm an App component!</div>
                    </div>
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default App;
const elm = document.getElementById("app");
if (elm) {
    ReactDOM.render(<App />, elm);
}
