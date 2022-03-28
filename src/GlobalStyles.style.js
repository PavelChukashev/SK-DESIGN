import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    & #root {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    & .main-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        max-width: 1440px;
        margin: 0;
        padding: 0;
        align-self: center;
    }

    @media screen and (max-width: 980px) {
        & .main-container {
            flex-direction: column;
            margin: 60px 0px;
            height: 100%;
        }
    }
`