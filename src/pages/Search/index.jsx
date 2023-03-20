import Form from "../../components/form";
import logo from "../../assets/Logo_laranja.svg"

import { Link } from "react-router-dom";

import SearhPageStyle from "../../styles/searchPage-style";


export default function Search() {
    return (
        <SearhPageStyle>
            <header>
                <a href="/">
                    <img className="logo" src={logo} alt="Lendo Música" />
                </a>
                <Link className="ultimasBuscas" to="/history">Últimas buscas</Link>
            </header>

            <main>
                <h1>Buscar letra</h1>
                <Form />
            </main>
        </SearhPageStyle>
    )
}