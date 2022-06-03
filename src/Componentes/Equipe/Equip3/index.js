import kiko from '../../../img/kiko.jpg'
import './styles.css'

const Equip3 =({name = 'Quico'}) =>{

    return(

        <div className = 'container-equip3'>
            <img src = {kiko} alt = "Quico"/>
            <p>{name}</p>
            <p>Especialista em ter tudo melhor que você</p>
        </div>
    )
}

export default Equip3;