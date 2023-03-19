import styled from "styled-components";

const ErrorSearchStyled = styled.div`
header {
    margin-bottom: 70px;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;

    width: 35%;
}

.meninaSofa {
    max-width: 250%;
    margin-top: 40px;
    margin-bottom: 26px;
}

button {
    margin: 0;
}

@media (max-width: 600px) {

    header {
        margin-top: 60px;
    }
    
    h1 {
        font-size: 24px;
    }

    .meninaSofa {
        width: 220px;
    }
}

@media (max-width: 320px) {
    .logo {
        width: 220px;
    }

    button {
        max-width: 80vw;
    }
}
`

export default ErrorSearchStyled