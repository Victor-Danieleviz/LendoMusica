import { redirect } from "react-router-dom"
import logo from "../../assets/Logo_laranja.svg"
import meninaSofa from "../../assets/Menina_no_sofa.svg"

import { useNavigate } from "react-router-dom"

import Button from "../../components/button"



export default function ErrorSearch() {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/")
    }

    return(
        <div>
            <header>
                <img src={logo} alt="Lendo Música" />
            </header>

            <main>
                <h1>Letra não encontrada</h1>
                <section>
                    <img src={meninaSofa} alt="menina no sofá" className="meninaSofa" />
                    <p>
                        Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca {"<3"}
                    </p>
                    <Button mensagem="Nova Busca" onClick={redirect}/>
                </section>
            </main>


        </div>
    )
}