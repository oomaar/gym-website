import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin:0px;
        padding: 0px;
        background-color: #000000;
        font-family: 'Lato', sans-serif;
    }

    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
    }
    
    button {
        outline: none;
        border: none;
    }
    
    input {
        outline: none;
        border: none;
    }
`;