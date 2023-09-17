import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter } from "react-router-dom";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js";
import ProvedorAutenticacao from "../context/ProvedorAutenticacao";
import NavBar from "../views/navbar/navbar";
import Rotas from "./router";

class App extends React.Component {

    render() {
        return (
            <> 
                <ProvedorAutenticacao>
                    <PrimeReactProvider>
                        <BrowserRouter>
                            <NavBar></NavBar>
                            <Rotas></Rotas>
                        </BrowserRouter>
                    </PrimeReactProvider>
                </ProvedorAutenticacao>
            </>
        );
        
    }

};

export default App;
