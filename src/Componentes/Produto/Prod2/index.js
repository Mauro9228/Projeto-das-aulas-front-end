import Sincro from '../../../img/Sincro.jpg'
import './styles.css'


const Prod2 =({name = 'Sincry-belt'}) =>{

    return(

        <div className = 'container-prod2'>
            <img src = {Sincro} alt = "Sincry-belt"/>
            <p>{name}</p>
            <p>Poderosa correia que não da deslizamento</p>
        </div>
    )
}

export default Prod2;