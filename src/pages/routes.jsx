import Home from './Home';
import Login from './Login';
import Mypage from './Mypage';
import Register from "./Register";
import FindAccount from "./FindAccount";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import Magazine from "./Magazine";
import NotFound from "./errors/404";
import Clothing from "./Clothing";


const routes = [
    {
        exact: false,
        path: '/clothing',
        name: 'Clothing',
        component: Clothing,
        auth: false,
        nav: true
    },
    {
        exact: true,
        path: '/',
        name: 'Home',
        component: Home,
        auth: false,
        nav: false
    },
    {
        exact: true,
        path: '/product/',
        name: 'Products',
        component: Products,
        auth: false,
        nav: false
    },
    {
        exact: true,
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        auth: false,
        nav: false
    },
    {
        exact: true,
        path: '/login',
        name: '로그인',
        component: Login,
        auth: false,
        nav: true
    },
    {
        exact: true,
        path: '/mypage',
        name: '마이페이지',
        component: Mypage,
        auth: true,
        nav: true
    },
    {
        exact: true,
        path: '/register',
        name: '회원가입',
        component: Register,
        auth: false,
        nav: true
    },
    {
        exact: true,
        path: '/find-account',
        name: 'Find',
        component: FindAccount,
        auth: false,
        nav: false
    },
    {
        exact: true,
        path: '/cart',
        name: '장바구니',
        component: ShoppingCart,
        auth: false,
        nav: true
    },
    {
        exact: true,
        path: '/magazine',
        name: 'Magazine',
        component: Magazine,
        auth: false,
        nav: true
    },
    {
        exact: true,
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        auth: false,
        nav: false
    }
];

export default routes;