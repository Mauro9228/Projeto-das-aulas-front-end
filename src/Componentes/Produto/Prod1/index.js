import tranq from '../../../img/tranq.jpg'
import './styles.css'


const Prod1 =({name = 'Tranquilinho'}) =>{

    return(

        <div className = 'container-prod1'>
            <img src = {tranq} alt = "Tranquilinho"/>
            <p>{name}</p>
            <p>Correia para por e ficar tranquilão</p>
        </div>
    )
}

export default Prod1;