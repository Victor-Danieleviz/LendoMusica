import logo from "../../assets/Logo_laranja.svg"
import Button from "../../components/button"

import { useNavigate } from "react-router-dom"

export default function SearchResult() {

    const navigate = useNavigate()

    const musicData = JSON.parse(localStorage.getItem("currentSearch"))

    const redirect = () => {
        navigate("/")
    }

    const musicPage = () => {
        navigate("/musicPage")
    }

    const addToLocalStorageHistory = (musicData, index) => {
        let searchedMusic = {
            artist: musicData.art.name,
            title: musicData.mus[index].name,
            text: musicData.mus[index].text
        }
        //localstorage que contém apenas a letra que foi selecionada pelo usuário (para evitar problemas de seleção da letra correta caso a api retorne mais de uma letra).
        localStorage.setItem("selectedLyric", JSON.stringify([searchedMusic])) 
        if (!localStorage.getItem("musicHistory")) {
            localStorage.setItem("musicHistory", JSON.stringify([searchedMusic]))
            return musicPage()
        } 
        
        const history = JSON.parse(localStorage.getItem('musicHistory'))

        if (history.length > 9) {
            history.shift()
        }

        history.push(searchedMusic)
        localStorage.setItem("musicHistory", JSON.stringify(history))
        return musicPage()        
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
                    {musicData[0].mus.map((music, index) => {
                        if (musicData[0].type == "aprox" || musicData[0].type == "exact") {
                            return (
                                <button onClick={() => addToLocalStorageHistory(musicData[0], index)} key={(musicData[0].art.name + '-' + music.name).replaceAll(' ', '')}>
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