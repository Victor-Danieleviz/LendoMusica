import styled from "styled-components";

const FormStyled = styled.form`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 34px;
    width: 40%; 

    section{
        display: flex;
        flex-direction: column;
        gap: 12px;
        
        width: 100%;
    }

    label {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;

        color: #FFFFFF;
    }

    input {
        border: none;
        border-bottom: 1px solid #FFFFFF;
        background-color: #fdfdfd00;

        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        color: #828282;
    }

    @media (max-width: 600px) {
        width: 80%;
    }
`
export default FormStyled