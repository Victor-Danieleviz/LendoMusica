import logo from "../../assets/Logo_laranja.svg"
import Button from "../../components/button"
import MusicHistory from "../../components/musicHistory"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import HistoryPageStyled from "../../styles/historyPage-style"

export default function History() {

    const navigate = useNavigate()
    const [historico, setHistorico] = useState(false);

    useEffect(() => {
        console.log('Histórico renderizado');
    }, [historico]);

    const limparHistorico = () => {
        localStorage.removeItem("musicHistory");
        setHistorico(!historico)
    }

    const redirect = () => {
        navigate("/")
    }

    return (
        <HistoryPageStyled>
            <header>
                <a href="/">
                    <img className="logo" src={logo} alt="Lendo Música" />
                </a>
                <Button className="limparHistorico" img="none" mensagem="Limpar Histórico" onClick={limparHistorico} />
            </header>
            <main>
                <h1>Histórico</h1>
                <section>
                    <MusicHistory/>
                    <Button mensagem="Buscar" onClick={redirect} />
                </section>
            </main>
        </HistoryPageStyled>
    )
}