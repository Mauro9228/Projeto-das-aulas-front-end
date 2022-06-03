import chespirito from '../../../img/chespirito.jpg'
import './styles.css'

const Equip1 =({name = 'Chespirito'}) =>{

    return(

        <div className = 'container-equip1'>
            <img src = {chespirito} alt = "Chespirito"/>
            <p>{name}</p>
            <p>Mestre da mandriagem, chespirito tem grande experiencia em meter o louco no pote</p>
        </div>
    )
}

export default Equip1;