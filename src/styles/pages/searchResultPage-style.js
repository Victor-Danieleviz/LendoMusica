import styled from "styled-components";

const SearchResultStyled = styled.div`

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 72px;

    margin-top: 72px;
}

@media (max-width: 600px) {

    header {
        flex-direction: column;
        gap: 48px;

        margin: 60px;
    }

    section {
        gap: 32px;

        margin-top: 48px;
    }

    p {
        font-size: 18px;
        margin-left: 0px;
    }

}

@media (max-width: 320px) {
    .logo {
        width: 240px;
    }

    p {
        min-width: 10%;
        font-size: 12px;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 20px;
    }

    button {
        max-width: 80vw;
    }
}

`

export default SearchResultStyled