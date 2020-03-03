import slick from "slick-carousel/slick/slick.css";
import slickTheme from "slick-carousel/slick/slick-theme.css";
import {createGlobalStyle} from "styled-components";

const SlickStyles = createGlobalStyle`
    ${slick}
    ${slickTheme}
`;

export default SlickStyles;