import {Link} from 'react-router-dom'
import './styles.css'



const Header = () =>{
    return(
        <main className = "container-main">
            
                <h1>Maurinho's Belts</h1>

                <ul>
                    <li><Link to = '/'><a>Home</a></Link></li>
                    <li><Link to = '/Produtos'><a>Produtos</a></Link></li>
                    <li><Link to = '/Equipe'><a>Equipe</a></Link></li>
                    <li><Link to = '/Contato'><a>Contato</a></Link></li>

                </ul>
                    
        </main>

    )
}

export default Header;