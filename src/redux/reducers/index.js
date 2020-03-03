import { combineReducers } from 'redux';
import authentication from './authentication';

// export default function reducers(props) {
//     return (
//         combineReducers({
//             authentication,
//         })
//     )
// };

export default combineReducers({
    authentication,
});