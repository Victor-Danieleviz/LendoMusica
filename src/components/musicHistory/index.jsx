import Button from "../button";

import { useNavigate } from "react-router-dom";

export default function MusicHistory() {

    const navigate = useNavigate()
    const allMusic = JSON.parse(localStorage.getItem("musicHistory"))

    console.log(allMusic)

    const musicPage = (index) => {
        console.log(allMusic[index])
        localStorage.setItem("selectedLyric", JSON.stringify([allMusic[index]])) 
        navigate("/musicPage")
    }

    return (
        <div>
            {allMusic != null ? allMusic.reverse().map((music, index) => {
                return (
                    <Button
                        key={index}
                        img="none"
                        mensagem={`${music.artist} - ${music.title}`}
                        onClick={() => musicPage(index)}
                    />
                )
            }) : <h2>Histórico Vazio.</h2>}
        </div>
    )
}