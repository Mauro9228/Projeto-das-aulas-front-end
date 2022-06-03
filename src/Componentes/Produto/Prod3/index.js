import jaguabelt from '../../../img/jaguabelt.jpg'
import './styles.css'


const Prod3 =({name = 'jaguabelt'}) =>{

    return(

        <div className = 'container-prod3'>
            <img src = {jaguabelt} alt = "jaguabelt"/>
            <p>{name}</p>
            <p>Projetada na Amazonia, a Jaguabelt transmite 3 vezes mais potência,
               escolha a quantidade de patas para sua necessidade.
            </p>
        </div>
    )
}

export default Prod3;