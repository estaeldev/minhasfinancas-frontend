import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js";
import NavBar from "../views/navbar/navbar";
import Rotas from "./router";

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
