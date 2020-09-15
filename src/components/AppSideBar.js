import React, {useContext} from 'react';
import AppContext from '../context/appContext';
import data from '../utils/route';
const AppSidebar = () => {
    const appContext = useContext(AppContext);
    const {isSidebarOpen} = appContext;
    console.log(data);
    return (
        <div style={{width: '250px', marginLeft: isSidebarOpen ? '0px' : '-250px'}}
             className={`bg-light border-right h-100 `}
             id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                {Object.keys(data).map((key, index) => {
                    let Icon = React.getComponentByName()
                    return (
                        <a key={data[key].text} href={data[key].link}
                           className="list-group-item list-group-item-action bg-light">
                           <Icon/>
                            {data[key].text}
                        </a>
                    )
                })

                }
            </div>
        </div>
    )
}
export default AppSidebar;
