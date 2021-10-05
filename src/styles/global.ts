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

    //Botões do carousel
    /* .rec.rec-arrow{
        height: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        /* background-color: green; */
        /* height: 20px;
        width: 20px; */
    }
    /* .rec.rec-arrow:disabled {
        visibility: hidden;
    } */
     
`;
