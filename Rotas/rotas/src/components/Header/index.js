import { Link } from 'react-router-dom';
import './estilo.css'; // Importação do CSS

function Header() {
    return (
        <header className="header">
            <h2 className="logo">Caparica</h2>
            <nav className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
    );
}

export default Header;
