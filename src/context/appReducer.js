import {TOGGLE_SIDEBAR} from '../types';

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: !action.payload,
            }
            break;
        default:
            return state;
    }
}
