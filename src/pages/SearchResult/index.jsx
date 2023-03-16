import logo from "../../assets/Logo_laranja.svg"
import Button from "../../components/button"

import { useNavigate } from "react-router-dom"
import ErrorSearch from "../ErrorSearch"

export default function SearchResult() {

    const navigate = useNavigate()

    const musicData = JSON.parse(localStorage.getItem("currentSearch"))
    console.log(musicData[0].mus.length)

    const redirect = () => {
        navigate("/")
    }

    const musicPage = () => {
        navigate("/musicPage")
    }

    return (
        <div>
            <header>
                <img src={logo} alt="Lendo Música" />
            </header>
            <main>
                <h1>Letra Encontrada</h1>
                <section>
                    {/*map é utilizado pois se acontecer da api retornar mais de uma letra para uma mesma música, todas as variações são mostradas.*/}
                    {musicData[0].mus.map((music) => { 
                        if (musicData[0].type == "aprox" || musicData[0].type == "exact") {
                            return (
                                <button onClick={musicPage} key={(musicData[0].art.name + '-' + music.name).replaceAll(' ', '')}>
                                    <span>{musicData[0].art.name}</span> <br />
                                    <span>{music.name}</span>
                                </button>
                            )
                        } else {
                            navigate("/errorSearch")
                        }
                    })}
                    <h2>Não encontrou o que procurava?</h2>
                    <Button mensagem="Nova Busca" onClick={redirect} />
                </section>
            </main>
        </div>
    )
}