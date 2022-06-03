import valterie from '../../../img/valterie.jpg'
import './styles.css'

const Equip5 =({name = 'Valtteri'}) =>{

    return(

        <div className = 'container-equip4'>
            <img src = {valterie} alt = "Valtteri"/>
            <p>{name}</p>
            <p>Especialista em não fazer uma</p>
        </div>
    )
}

export default Equip5;