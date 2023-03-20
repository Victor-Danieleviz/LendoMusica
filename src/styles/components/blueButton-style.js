import styled from "styled-components";

const BlueButtonStyled = styled.button`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    width: 100%;
    height: 120px;
    margin-bottom: 72px;

    border: none;
    border-radius: 4px;
    background: #219EBC;

    font-size: 16px;

    color: #FFFFFF;
    line-height: 22px;

    cursor: pointer;

    span {
        margin-left: 32px;
        color: #FFFFFF;
    }

    .title {
        font-weight: 700;
    }

    @media (max-width: 600px) {
        height: 80px;
        width: 80%;
        margin-bottom: 48px;
    }

    @media (max-width: 320px) {
        min-width: 10%;
        font-size: 14px;
    }
`

export default BlueButtonStyled