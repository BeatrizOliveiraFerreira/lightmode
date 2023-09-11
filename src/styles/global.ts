import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    img {
        align-items: center;
        margin-left: 12rem;
    }
    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
        align-items:center;
        justify-content:space-between;
        margin-top: 3rem;
        margin-right: 40rem;


    }

    button {
        width: Hug (90px);
        height: Hug (52px);
        padding: 16px;
        border-radius: 8px;
        gap: 8px;
        color:white;
        background: #1E6F9F;
        margin-left: -45rem;
        margin-top: 19rem;
        cursor: pointer

    }

    .switch {
        margin-bottom: -10rem;
        margin-right: 12rem;
    }

    span {
        margin-top: 40rem;
    }

    a {
        text-decoration: none;
        color: #F2F2F2;
    }

`;

