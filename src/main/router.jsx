import React from "react";
import {Route, Routes } from "react-router-dom";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Login from "../views/login/login";

function Rotas() {
    return (
        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
        </Routes>
    )
}

export default Rotas
