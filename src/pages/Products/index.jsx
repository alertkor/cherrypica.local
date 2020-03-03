import React from 'react';
import NavigationBar from "../../component/NavigationBar";
import ProductsItems from "./component";


export default class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <ProductsItems/>
            </React.Fragment>
        )
    }
}