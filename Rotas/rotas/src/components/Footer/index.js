import { Link } from 'react-router-dom';
import './estilo.css'; // Exemplo de importação de estilo

function Footer() {
    return (
        <footer>
            <nav>
                <ul className="footer-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
