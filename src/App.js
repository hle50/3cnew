import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import AppSidebar from "./components/AppSideBar";
import AppState from "./context/AppState";
import Breadcrumb from "./components/Breadcrumb";
import Home from './pages/Home';
import LodgeComplaint from './pages/LodgeComplaint';
import MakeInquiry from './pages/MakeInquiry';
import MyMatters from './pages/MyMatters';
import ProvideFeedback from './pages/ProvideFeedback';

function App() {
    return (
        <AppState>
            <Router>

                <div className="App h-100">
                    <Header/>
                    <div id='wrapper' className='h-100 d-flex'>
                        <AppSidebar/>
                        <div className='w-100'>
                            <Breadcrumb/>
                            <div className="mt-3">
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/make-an-inquiry" component={MakeInquiry}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        </AppState>
    );
}

export default App;
