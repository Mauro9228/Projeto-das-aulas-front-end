import Prod1 from '../../Componentes/Produto/Prod1'
import Prod2 from '../../Componentes/Produto/Prod2'
import Prod3 from '../../Componentes/Produto/Prod3'
import Prod4 from '../../Componentes/Produto/Prod4'
import './styles.css'

const Produto =() =>{
    return(
        
        <div className='container-produtos'>
            <Prod1 name = "Tranquilinho"/>
            <Prod2 name = "Sincry-belt"/>
            <Prod3 name = "Jaguabelt"/>
            <Prod4 name = "Mauchain"/>
        
        </div>
    )
}

export default Produto