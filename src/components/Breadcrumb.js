import React, {useContext} from 'react';
import AppContext from '../context/appContext';

const Breadcrumb = () => {
    const appContext = useContext(AppContext);
    const {toggleSideBar} = appContext;
    return (
        <nav aria-label="breadcrumb">
            <div className='d-flex flex-row align-items-center w-100 bg-white' style={{padding: '10px'}}>
                <svg onClick={toggleSideBar} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-justify"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
                <ol className='mt-0 mb-0'>
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumb;
