import Equip1 from "../../Componentes/Equipe/Equip1";
import Equip2 from "../../Componentes/Equipe/Equip2";
import Equip3 from "../../Componentes/Equipe/Equip3";
import Equip4 from "../../Componentes/Equipe/Equip4";
import Equip5 from "../../Componentes/Equipe/Equip5";
import './styless.css'

const Equipe =() =>{
     return(
      <div className ='container-equipe'>
         <Equip1 Name = "Chespirito"/>
         <Equip2 Name = "Dedão"/>
         <Equip3 Name = "Kiko"/>
         <Equip4 Name = "Rufus"/>
         <Equip5 Name = "Valtteri"/>
      </div>
        
     )

}

export default Equipe;