import dedao from '../../../img/dedao.jpg'
import './styles.css'

const Equip2 =({name = 'Dedao'}) =>{

    return(

        <div className = 'container-equip2'>
            <img src = {dedao} alt = "dedao"/>
            <p>{name}</p>
            <p>Mestre em gritar um nome de uma certa pessoa
                o Dedao foi aprendiz por muitos anos do Kauzalberto
            </p>
        </div>
    )
}

export default Equip2;