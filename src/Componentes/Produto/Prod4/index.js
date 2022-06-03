import mauchain from '../../../img/mauchain.jpg'
import './styles.css'


const Prod4 =({name = 'Maurinhoschain'}) =>{

    return(

        <div className = 'container-prod4'>
            <img src = {mauchain} alt = "mauchain"/>
            <p>{name}</p>
            <p>Correia para fortes trabalhos e surras doloridas, a Maurinhoschain é especialmente projetada
                para altos torque, operação silenciosa, nós da Maurinho's belt disponinilizamos
                com larguras estreitas para dar surras em filhos também.
            </p>
        </div>
    )
}

export default Prod4;