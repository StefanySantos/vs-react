import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
import './index.css'
import CadastroServico from './pages/CadastroServico'
import CadastroUsuario from './pages/CadastroUsuario'
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs'
import Servicos from './pages/ListaServicos'
import Login from './pages/Login'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = 'listaservicos' element = {<Servicos />}/>
      <Route path = 'listadevs'  element = {<ListaDevs />}/>
      <Route path = 'perfil/:idUsuario' element = {<PerfilUsuario />}/>
      <Route path = 'servicos/:idServicos' element = {<VisualizarServico />}/>
      <Route path = 'cadastrousuario' element = {<CadastroUsuario />}/>
      <Route path = 'cadastroservico' element = {<CadastroServico />}/>
      <Route path = 'login' element = {<Login />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
