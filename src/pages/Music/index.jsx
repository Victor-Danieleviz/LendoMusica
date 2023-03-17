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
    
    const lyric = JSON.parse(localStorage.getItem("selectedLyric"))[0]
    console.log(lyric)

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
                <h1>{lyric.title}</h1>
                <p style={{whiteSpace: 'pre-wrap'}}>{lyric.text}</p>
                <h2>Curtiu? Busque mais letras.</h2>
                <Button lupa="branca" mensagem="Nova Busca" onClick={redirect}/>
            </main>
        </div>
    )
}