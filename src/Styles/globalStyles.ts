import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
        outline: none;
    }

    input {
        color: #828282;
        border-radius: 4px;
        border: 1px solid gray
    }
    
    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`