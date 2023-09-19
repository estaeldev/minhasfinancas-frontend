import React from "react";
import { Route, Routes } from "react-router-dom";
import useProvedorAutenticacaoContext from "../hook/useProvedorAutenticacaoContext";
import CadastroUsuario from "../views/cadastro/cadastroUsuario";
import Home from "../views/home";
import CadastroLancamento from "../views/lancamentos/CadastroLancamento";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamento";
import Login from "../views/login/login";

function Rotas() {
    
    const {usuarioAutenticado} = useProvedorAutenticacaoContext()

    return (
        <Routes>

            {usuarioAutenticado.isAutenticado? 
            <>  
                <Route path="/" Component={Home}></Route>
                <Route path="/home" Component={Home}></Route> 
                <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
                <Route path="/lancamentos" Component={ConsultaLancamento}></Route>
                <Route path="/cadastro-lancamentos/:id?" Component={CadastroLancamento}></Route>
            </> 
            : 
            <>
                <Route path="/*" Component={Login}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>
            </>}

        </Routes>
    )
}

export default Rotas
