import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Bem-vindo à página Sobre</h1>


            <Link to='/home'>Home</Link>
            <Link to='/contato'>Contato</Link>

        </div>
    );
}
export default Sobre;