import styled from "styled-components";

const SearhPageStyle = styled.div`
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 105px;
    }

    @media (max-width: 600px) {
        header {
            flex-direction: column;
            gap: 32px;

            margin-top: 60px;
        }

        main {
            gap: 60px;
        }
    }

    @media (max-width: 320px) {
        .logo {
            width: 240px;
        }

        button {
            max-width: 80%;
        }
    }
`

export default SearhPageStyle