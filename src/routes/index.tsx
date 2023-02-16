import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import OthersLayout from '../layouts/OthersLayout';
import UserLayout from '../layouts/UserLayout';
import AboutPage from '../pages/AboutPage';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import News from '../pages/News';
import PortFolio from '../pages/PortFolio';
import { USER_PAGES } from './path';

export default function Router() {
    return useRoutes([
        {
            path: "*",
            element: <OthersLayout />,
            children: [
            ],
        },

        {
            path: USER_PAGES.home,
            element: <UserLayout/>,
            children: [
                {element: <HomePage/>, index:true},
                {path: USER_PAGES.about, element: <AboutPage/>},
                {path: USER_PAGES.portfolio, element: <PortFolio/>},
                {path: USER_PAGES.news, element: <News/>},
                {path: USER_PAGES.contact, element: <Contact/>},
            ]
        },

        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

