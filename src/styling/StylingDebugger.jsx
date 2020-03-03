import {createGlobalStyle} from "styled-components";
import {media} from "styled-bootstrap-grid";

const SmallBreakPoint = media.sm;
const MediumBreakPoint = media.md;
const LargeBreakPoint = media.lg;
const ExtraLargeBreakPoint = media.xl;


const StylingDebugger = createGlobalStyle`
body:after {
 content: 'xs : 0 - 575px';
 position: absolute;
 bottom: 0;
 right: 0;
 color: white;
 font-size: 20px;
 padding: 4px 8px;
 margin: 10px;
 background-color: blue;
 font-family: $font-family-sans-serif;
 z-index: 100000000;

${SmallBreakPoint`
   content: 'sm : 576px - 767px';
   background-color: indigo;
`}

${MediumBreakPoint`
    content: 'md : 768px - 991px';
    background-color: pink;
`}

${LargeBreakPoint`
   content: 'lg : 992px - 1199px';
   background-color: orange;
`}

${ExtraLargeBreakPoint`
    content: 'xl : 1200px - ';
    background-color: red;
`}
}
`;

export default StylingDebugger;