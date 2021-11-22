import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/detailpage";
import Cart from "./pages/cart";

const App = () => {
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/product/:id" component={DetailPage}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </Router>
    )
}
export default App;