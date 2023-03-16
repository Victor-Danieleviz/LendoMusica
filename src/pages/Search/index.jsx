import Form from "../../components/form";
import logo from "../../assets/Logo_laranja.svg"

import { Link } from "react-router-dom";


export default function Search() {
    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="Lendo Música" />
                <Link className="ultimasBuscas" to="/history">Últimas buscas</Link>
            </header>

            <main>
                <h1>Buscar letra</h1>
                <Form />
            </main>
        </div>
    )
}