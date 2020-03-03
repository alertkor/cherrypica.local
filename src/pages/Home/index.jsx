import React from 'react';
import NavigationBar from '../../component/NavigationBar/';
import MasonryGrid from '../../component/MasonryGrid/';
import Footer from '../../component/Footer';
import QuickMenu from "../../component/QuickMenu";


export default class Home extends React.PureComponent {
    constructor(state) {
        super(state);
        this.state = {
            images: [
                {
                    product_no: 1,
                    thumbnail: require('../../assets/1.png'),
                    liked: false,
                },
                {
                    product_no: 2,
                    thumbnail: require('../../assets/2.png'),
                    liked: false,
                },
                {
                    product_no: 3,
                    thumbnail: require('../../assets/3.png'),
                    liked: false,
                },
                {
                    product_no: 4,
                    thumbnail: require('../../assets/4.png'),
                    liked: false,
                },
                {
                    product_no: 1,
                    thumbnail: require('../../assets/1.png'),
                    liked: false,
                },
                {
                    product_no: 2,
                    thumbnail: require('../../assets/2.png'),
                    liked: false,
                },
                {
                    product_no: 3,
                    thumbnail: require('../../assets/3.png'),
                    liked: false,
                },
                {
                    product_no: 1,
                    thumbnail: require('../../assets/1.png'),
                    liked: false,
                },
                {
                    product_no: 2,
                    thumbnail: require('../../assets/2.png'),
                    liked: false,
                },
                {
                    product_no: 3,
                    thumbnail: require('../../assets/3.png'),
                    liked: false,
                },
                {
                    product_no: 4,
                    thumbnail: require('../../assets/4.png'),
                    liked: false,
                },
                {
                    product_no: 5,
                    thumbnail: require('../../assets/5.png'),
                    liked: false,
                },
                {
                    product_no: 6,
                    thumbnail: require('../../assets/6.png'),
                    liked: false,
                },
                {
                    product_no: 4,
                    thumbnail: require('../../assets/4.png'),
                    liked: false,
                },
                {
                    product_no: 5,
                    thumbnail: require('../../assets/5.png'),
                    liked: false,
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <MasonryGrid images={this.state.images}/>
                <QuickMenu/>
                <Footer/>
            </React.Fragment>
        )
    }
};