import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Equipe from './Pages/Equipe'
import './'

const Rotas =() =>{
  return(

    <BrowserRouter>
    
    <Header/>

    <Routes>

      <Route path ="/" exact ={true} element = {<Home/>}/>
      <Route path ="/Produtos" element = {<Produtos/>}/>
      <Route path ="/Equipe" element = {<Equipe/>}/>
      <Route path ="/Contato"   element = {<Contato/>}/>



    </Routes>

  
    
    
    
    </BrowserRouter>
  )
}

export default Rotas;