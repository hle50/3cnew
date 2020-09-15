import React, {useReducer} from 'react';
import {
    TOGGLE_SIDEBAR
} from '../types';
import AppContext from './appContext';
import appReducer from './appReducer';

const AppState = props => {
    const initialState = {
        isSidebarOpen: true,
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const toggleSideBar = () => {
        dispatch({
            type: TOGGLE_SIDEBAR,
            payload: state.isSidebarOpen,
        })
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen: state.isSidebarOpen,
            toggleSideBar
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
