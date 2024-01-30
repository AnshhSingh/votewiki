import React from "react";
import Main from "./main.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./main";
import Login from "./pages/login";
import Create from "./pages/new-user";


 
function App() {
    return (
        <div className="App">
        <Navbar />
        <Main />
      </div>
    );
}
 
export default App;