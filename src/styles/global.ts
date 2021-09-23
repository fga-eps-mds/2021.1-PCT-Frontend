import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        max-width: 100vw;
    }

    body {
        background-color: #edffd3;
        --webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px sans-serif;
    }

    #root {
        max-width: 1900px;
        margin: 0 auto;
        padding: 35px 0px;
    }
    
`;
