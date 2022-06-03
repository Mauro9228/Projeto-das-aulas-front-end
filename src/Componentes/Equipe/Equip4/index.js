import rufus from '../../../img/rufus.jpg'
import './styless.css'

const Equip4 =({name = 'rufus'}) =>{

    return(

        <div className = 'container-equip4'>
            <img src = {rufus} alt = "rufus"/>
            <p>{name}</p>
            <p>Especialista e ser chamado por um certo ser</p>
        </div>
    )
}

export default Equip4;