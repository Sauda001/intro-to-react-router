import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

const Root = () => {

    const navigation = useNavigation()
    const isNavigate = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                {
                    isNavigate && <span>Loading.....</span>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;