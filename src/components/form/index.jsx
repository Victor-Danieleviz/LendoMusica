import Button from "../button";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Form() {
    
    const key = "21f7dd7eb7d3581a3f3e34facb2ad482"

    let url = ''

    const [nomeArtista, setNomeArtista] = useState('')
    const [nomeMusica, setNomeMusica] = useState('')

    const navigate = useNavigate()

    const buscar = (event) => {
        event.preventDefault()
        url = `https://api.vagalume.com.br/search.php?art=${nomeArtista}&mus=${nomeMusica}&apikey=${key}`
        obterLetra()
    }

    async function obterLetra() {
        try {
            const resposta = await fetch(url);
            const dados = await resposta.json();
            console.log(dados)
            console.log(dados.art.name)
            console.log(dados.mus[0].name)
            console.log(dados.mus[0].text)
            testeStorage(dados)
        } catch (erro) {
            console.log('Música não encontrada =(')
            navigate("/errorSearch"); 
        }
    }

    const testeStorage = (dados) => {
        try {
            let chave = (dados.art.name +'-'+ dados.mus[0].name).replaceAll(' ','')
            let conteudo = JSON.stringify(dados)
    
            localStorage.setItem(chave,conteudo)
            console.log("criou o localStorage")
            navigate(`/searchResult?artMus=${chave}`); 
        } catch{
            console.log('Erro no localStorage')
        }
    }

    return (
        <div>
            <form>
                <section className="inputForm">
                    <label htmlFor="inputArtista">Artista</label>
                    <input 
                        name="inputArtista" 
                        id="inputArtista" 
                        type="text" 
                        placeholder="insira o nome do artista" 
                        onChange={(e)=>setNomeArtista(e.target.value)}/>
                </section>

                <section className="inputForm">
                    <label htmlFor="inputMusica">Música</label>
                    <input 
                        name="inputMusica" 
                        id="inputMusica" 
                        type="text" 
                        placeholder="insira o nome da música" 
                        onChange={(e)=>setNomeMusica(e.target.value)}/>
                </section>
                <Button mensagem="Busca" type="submit" onClick={buscar}/>
            </form>
        </div>
    )
}