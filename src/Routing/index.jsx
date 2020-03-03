import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import routes from '../pages/routes';

// styling
import {ThemeProvider} from "styled-components";
import theme from "../styling/theme";
import {GridThemeProvider} from "styled-bootstrap-grid";
import gridTheme from "../styling/gridTheme";
import {BaseCSS} from "styled-bootstrap-grid";
import BasicOverridingStyle from "../styling/BasicOverridingStyle";
import SlickStyles from "../styling/SlickStyle";
import ThirdPartyOverridingStyle from "../styling/ThirdPartyOverridingStyle";
// eslint-disable-next-line
import StylingDebugger from "../styling/StylingDebugger";


function StyleSheets() {
    return (
        <React.Fragment>
            <SlickStyles/>
            <BaseCSS/>
            <BasicOverridingStyle/>
            <ThirdPartyOverridingStyle/>
            {/*<StylingDebugger/>*/}
        </React.Fragment>
    );
};

function RoutesMap() {
    return routes.map(({exact, path, component}, i) => {
        return (
            <Route exact={exact} path={path} component={component} key={i}/>
        )
    });
}


export default function Routing(props) {
    return (
        <ThemeProvider theme={theme}>
            <GridThemeProvider gridTheme={gridTheme}>
                <React.Fragment>
                    <StyleSheets/>
                    <Router>
                        <RoutesMap/>
                    </Router>
                </React.Fragment>
            </GridThemeProvider>
        </ThemeProvider>
    )
}
