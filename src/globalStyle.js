import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;

    font-family: 'Open Sans';
    text-decoration: none;
    color: #FFB703;
}

body {
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, #023047 0%, #000000 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
}

header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 128px 0px 64px 0px;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 30px;
}

h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    text-align: center;

    color: #FFFFFF;
}

h2 {
    max-width: 344px;

    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;

    color: #FFFFFF;
}

p {
    min-width: 240px;

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;

    color: #FFFFFF;
}

.logo {
    width: 300px;
    height: 40px;
}

`

export default GlobalStyle