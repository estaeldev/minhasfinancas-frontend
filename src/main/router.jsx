import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamento";
import Login from "../views/login/login";
import CadastroLancamento from "../views/lancamentos/CadastroLancamento";

function Rotas() {
    return (
        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
            <Route path="/home" Component={Home}></Route>
            <Route path="/lancamentos" Component={ConsultaLancamento}></Route>
            <Route path="/cadastro-lancamentos/:id?" Component={CadastroLancamento}></Route>
        </Routes>
    )
}

export default Rotas
