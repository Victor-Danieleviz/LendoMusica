import logo from "../../assets/Logo_azul.svg"
import seta from "../../assets/Seta.svg"
import Button from "../../components/button"

import MusicPageStyled from "../../styles/pages/musicPage-style"

import { useNavigate, Link } from "react-router-dom"


export default function Music() {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/")
    }

    const lyric = JSON.parse(localStorage.getItem("selectedLyric"))[0]
    console.log(lyric)

    return (

        <MusicPageStyled>
            <header>
                <Link to="/">
                    <img className="logo" src={logo} alt="Lendo Música" />
                </Link>
                <Link to="/">
                    <img src={seta} />
                    Voltar para a busca
                </Link>
            </header>
            <main>
                <section>
                    <h1>{lyric.title}</h1>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{lyric.text}</p>
                </section>
                <h2>Curtiu? Busque mais letras.</h2>
                <Button lupa="branca" mensagem="Nova Busca" onClick={redirect} />
            </main>
        </MusicPageStyled>
    )
}