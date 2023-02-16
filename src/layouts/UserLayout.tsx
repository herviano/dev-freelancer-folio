import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function UserLayout() {
    return (
        <Fragment>
            <Header/>
            <Outlet/>
        </Fragment>
    );
}

export default UserLayout;