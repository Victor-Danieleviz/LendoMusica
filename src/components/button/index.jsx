import React from 'react';
import lupa from "./img/Lupa.svg"
import lupa_branco from "./img/Lupa_branco.svg"
import ButtonStyled from '../../styles/components/button-style.js';

export default function Button(props) {
    return (
        <div>
            <ButtonStyled className={props.className} onClick={props.onClick} type={props.type}>
                {props.img != "none" ? <img src={props.lupa == "branca" ? lupa_branco : lupa } /> : ""}
                {props.mensagem}
            </ButtonStyled>
        </div>
    )
}