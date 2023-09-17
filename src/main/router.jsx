import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
            <Route path="/login" Component={Login}></Route>
            <Route path="/cadastro-usuario" Component={CadastroUsuario}></Route>

            <Route path="/home" element={usuarioAutenticado.isAutenticado ? 
                <Home />
             : 
                <Navigate to={"/login"} />
            } />

            <Route path="/lancamentos" element={usuarioAutenticado.isAutenticado ? 
                <ConsultaLancamento />
             : 
                <Navigate to={"/login"} />
            } />

            <Route path="/cadastro-lancamentos/:id?" element={usuarioAutenticado.isAutenticado ? 
                <CadastroLancamento />
             : 
                <Navigate to={"/login"} />
            } />
            

        </Routes>
    )
}

export default Rotas
