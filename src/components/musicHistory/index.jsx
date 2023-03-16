import Button from "../button";

import { useNavigate } from "react-router-dom";

export default function MusicHistory() {

    const navigate = useNavigate()

    const allMusic = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const artMus = localStorage.getItem(key);
        const object = JSON.parse(artMus);
        allMusic.push(object);
    }

    console.log(allMusic)

    const musicPage = (chave) => {
        navigate(`/musicPage?artMus=${chave}`)
    }

    return (
        <div>
            {allMusic.map((music) => {
                if (music.type == "aprox" || music.type == "exact") {
                    let chave = (music.art.name + '-' + music.mus[0].name).replaceAll(' ', '')
                    return (
                        <Button
                            key={chave}
                            img="none"
                            mensagem={`${music.art.name} - ${music.mus[0].name}`}
                            onClick={() => musicPage(chave)}
                        />
                    )
                }
            })}
            {<h2>{allMusic.length == 0 ? "Histórico Vazio" : ""}</h2>}
        </div>
    )
}