// pages/ErrorPage.js
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>Desculpe, mas a página que você está procurando não existe.</p>
            <Link to="/home">Voltar para Home</Link>
        </div>
    );
}

export default ErrorPage;
