import logo from "../../assets/Logo_laranja.svg"
import Button from "../../components/button"
import MusicHistory from "../../components/musicHistory"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
        <div>
            <header>
                <img className="logo" src={logo} alt="Lendo Música" />
                <Button className="limparHistorico" img="none" mensagem="Limpar Histórico" onClick={limparHistorico} />
            </header>
            <main>
                <h1>Histórico</h1>
                <section>
                    <MusicHistory />
                    <Button mensagem="buscar" onClick={redirect} />
                </section>
            </main>
        </div>
    )
}