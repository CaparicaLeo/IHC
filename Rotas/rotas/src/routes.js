// routes.js ou seu arquivo de rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import ErrorPage from './pages/ErrorPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';

const sampleProduct = {
    name: "Produto Exemplo",
    image: "https://via.placeholder.com/150", // URL da imagem do produto
    description: "Descrição do produto exemplo.",
    price: 29.99,
};

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/contato' element={<Contato />} />
                    <Route path='/error' element={<ErrorPage />} />
                    <Route path='/produtos' element={<ProductPage product={sampleProduct} />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
