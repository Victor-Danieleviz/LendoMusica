import styled from "styled-components";

const HistoryPageStyled = styled.div`

    .limparHistorico {
        border: none;

        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        text-align: center;

        color: #FFFFFF;
    }

    button {
        margin: 0;
    }

    h1 {
        margin-bottom: 72px;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 42px;
    }

    @media (max-width: 600px) {
        header {
            flex-direction: column;
            gap: 32px;
            
            margin-top: 60px;
        }
    }

    @media (max-width: 320px){
        .logo {
            width: 220px;
        }

        button {
            max-width: 80%;
            margin-left: 10%;
        }
    }
`

export default HistoryPageStyled