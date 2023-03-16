import logo from "../../assets/Logo_laranja.svg"
import Button from "../../components/button"

import { useNavigate } from "react-router-dom"
import ErrorSearch from "../ErrorSearch"

export default function SearchResult() {

    const navigate = useNavigate()

    const chave = new URLSearchParams(window.location.search).get('artMus')
    
    const dadosMusica = JSON.parse(localStorage.getItem(chave))

    if (dadosMusica == null) {
        return <ErrorSearch />
    }

    const redirect = () => {
        navigate("/")
    }

    const musicPage = () => {
        navigate(`/musicPage?artMus=${chave}`)
    }

    return (
        <div>
            <header>
                <img src={logo} alt="Lendo Música" />
            </header>
            <main>
                <h1>Letra Encontrada</h1>
                <section>
                    <button onClick={musicPage}>
                        <h3>{dadosMusica.art.name}</h3>
                        <p>{dadosMusica.mus[0].name}</p>
                    </button>
                    <h2>Não encontrou o que procurava?</h2>
                    <Button mensagem="Nova Busca" onClick={redirect}/>
                </section>
            </main>
        </div>
    )
}