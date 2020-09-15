import React, {useContext} from 'react';
import AppContext from '../context/appContext';
import data from '../utils/route';
import HomeIcon from './icons/HomeIcon';
import LodgeAComplaintIcon from './icons/LodgeAComplaintIcon';
import MakeAnInquiryIcon from './icons/MakeAnInquiryIcon';
import MyMattersIcon from './icons/MyMattersIcon';
import ProvideFeedbackIcon from './icons/ProvideFeedbackIcon';
const Components = {
    HomeIcon: HomeIcon,
    LodgeAComplaintIcon: LodgeAComplaintIcon,
    MakeAnInquiryIcon: MakeAnInquiryIcon,
    MyMattersIcon: MyMattersIcon,
    ProvideFeedbackIcon: ProvideFeedbackIcon,
};

const Logo =  block => {
    if (typeof Components[block] !== "undefined") {
        return React.createElement(Components[block], {
        });
    }
};

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

                    return (
                        <a key={data[key].text} href={data[key].link}
                           className="list-group-item list-group-item-action bg-light">
                            {Logo(data[key].icon)}
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
