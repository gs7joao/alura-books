import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img 
                className='logoImg'
                src={logo}
                alt='Logo Alura Books'
            ></img>
            <p> <strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;