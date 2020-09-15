import React from 'react';
import Home from '../pages/Home';
import LodgeComplaint from '../pages/LodgeComplaint';
import MakeInquiry from '../pages/MakeInquiry';
import MyMatters from '../pages/MyMatters';
import ProvideFeedback from '../pages/ProvideFeedback';
import HomeIcon from '../components/icons/HomeIcon';
import LodgeAComplaintIcon from '../components/icons/LodgeAComplaintIcon';
import MakeAnInquiryIcon from '../components/icons/MakeAnInquiryIcon';
import MyMattersIcon from '../components/icons/MyMattersIcon';
import ProvideFeedbackIcon from '../components/icons/ProvideFeedbackIcon';
export default {
    home: {
        text: 'Home',
        link: '/',
        comp: Home,
    },
    lodgeComplaint: {
        text: 'Lodge a Complaint',
        link: '/lodge-complaint',
        comp: LodgeComplaint,
        icon: HomeIcon
    },
    makeAnInquiry: {
        text: '/Make an Inquiry',
        link: '/make-an-inquiry',
        comp: MakeInquiry,
        icon: MakeAnInquiryIcon,
    },
    myMatters: {
        text: 'My Matters',
        link: '/my-matters',
        comp: MyMatters,
        icon: MyMattersIcon,
    },
    provideFeedback: {
        text: 'Provide Feedback',
        link: '/provide-feedback',
        comp: ProvideFeedback,
        icon: ProvideFeedbackIcon,
    }
}
