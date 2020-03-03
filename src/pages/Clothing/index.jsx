import React from 'react';
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import NavigationBar from "../../component/NavigationBar";
import DesktopCategory from "./component/Desktop/DesktopCategory";
import MobileCategory from "./component/Mobile/MobileCategory";
import QuickMenu from "../../component/QuickMenu";

const desktopBreakpoint = media.lg;


const Desktop = styled.div`
    display: none;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const Mobile = styled.div`
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

export default class Clothing extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products:[
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
                {
                    thumbnail: require('../../assets/files/detail/desktop-detail-slick2.png'),
                    badge: ['바로 대여가능', '구매 가능'],
                    brand: 'YVES SALOMON',
                    title: '19FW Unbalance Long Shirt with something',
                    originalPrice: 927000,
                    price: 8500
                },
            ],
        };
    }

    UNSAFE_componentWillMount() {
        // console.log(this.state.name)
        // if (this.state.allow_url.indexOf(this.state.name) !== 0) {
        //     this.props.history.goBack();
        // }
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Desktop>
                    <DesktopCategory products={this.state.products}/>
                </Desktop>
                <Mobile>
                    <MobileCategory products={this.state.products}/>
                </Mobile>
                <QuickMenu/>
            </React.Fragment>
        )
    }
};
