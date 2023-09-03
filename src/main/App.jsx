import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css';
import NavBar from "../views/navbar/navbar";
import Rotas from "./router";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <> 
                <BrowserRouter>
                    <NavBar></NavBar>
                    <Rotas></Rotas>
                </BrowserRouter>
            </>
        );

    }

};

export default App;
