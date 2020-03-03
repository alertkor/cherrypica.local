import {createGlobalStyle} from "styled-components";

const OverridingDefaultStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Montserrat|Noto+Sans+KR');

html, body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    width: 100%;
}

html {
    font-size: 0.625rem;
}

body {
    font-size: 1.6rem;
    font-family: "Noto Sans KR", sans-serif, Arial, Calibri;
    overflow-x: hidden;
}

:focus { outline: none; }

hr {
    border: none;
    border-top: 1px solid rgba(0,0,0,.11);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

#app {
    overflow-x: hidden;
}
`;

export default OverridingDefaultStyles;