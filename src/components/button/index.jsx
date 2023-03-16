import React from 'react';
import lupa from "./img/Lupa.svg"
import lupa_branco from "./img/Lupa_branco.svg"

export default function Button(props) {
    return (
        <div>
            <button className={props.className} onClick={props.onClick} type={props.type}>
                {props.img != "none" ? <img src={props.lupa == "branca" ? lupa_branco : lupa } /> : ""}
                {props.mensagem}
            </button>
        </div>
    )
}