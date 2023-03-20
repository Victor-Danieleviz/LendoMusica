import styled from "styled-components";

const MusicPageStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;

    background-color: #FFFFFF;
    background-repeat: repeat;

    
    overflow: hidden;

    * {
        margin: 0;
        padding: 0;

        text-decoration: none;
        font-family: 'Open Sans';

        color: #023047;
    }

    header {
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 100vw;
        margin: 120px 0px;
    }

    header a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        font-weight: 400;
        font-size: 24px;
        line-height: 33px;

        color: #219EBC;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        margin-bottom: 92px;
    }

    h1 {
        margin-bottom: 32px;

        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
    }

    p {
        width: 352px;

        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
    }

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        margin-top: 12px;
        padding: 14px 72px;

        border: none;
        border-radius: 4px;
        background: #219EBC;

        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        white-space: nowrap;


        color: #FFFFFF;
        cursor: pointer;
    }

    @media (max-width: 600px) {

        header {
            flex-direction: column;
            gap: 48px;

            margin: 60px;
        }

        section{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
        }

        main {
            width: 90%;
        }

        p {
            font-size: 18px;
            max-width: 280px;
        }

    }

    @media (max-width: 320px) {
        .logo {
            width: 240px;
        }

        p{
            font-size: 16px;
            max-width: 160px;
        }

        button {
            width: 80%;
            margin-left: 10%;
        }

    }
`

export default MusicPageStyled