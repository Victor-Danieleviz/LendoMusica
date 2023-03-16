import logo from "../../assets/Logo_azul.svg"
import seta from "../../assets/Seta.svg"
import Button from "../../components/button"

import ErrorSearch from "../ErrorSearch"

import { useNavigate, Link } from "react-router-dom"


export default function Music() {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/")
    }

    const chave = new URLSearchParams(window.location.search).get('artMus')
    
    const dadosMusica = JSON.parse(localStorage.getItem(chave))

    if (dadosMusica == null) {
        return <ErrorSearch />
    }

    console.log(dadosMusica.mus[0])

    return(
        
        <div>
            <header>
                <img src={logo} alt="Lendo Música"/>
                <Link to="/">
                    <img src={seta}/>
                    Voltar para a busca
                </Link>
            </header>
            <main>
                <h1>{dadosMusica.mus[0].name}</h1>
                <p style={{whiteSpace: 'pre-wrap'}}>{dadosMusica.mus[0].text}</p>
                <h2>Curtiu? Busque mais letras.</h2>
                <Button lupa="branca" mensagem="Nova Busca" onClick={redirect}/>
            </main>
        </div>
    )
}