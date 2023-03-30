import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

    *, body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
    }
`