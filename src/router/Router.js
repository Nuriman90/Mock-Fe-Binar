import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Cookies from 'js-cookie';
import DashboardDetail from '../pages/dashboard/DashboardDetail';

const Router = () => {
    const token = Cookies.get("token");

    const landingPages = () => (
        <Navbar>
            <Routes>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/dashboard-detail/:slug' element={<DashboardDetail />} />
                <Route exact path='/*' element={<NotFound />} />
            </Routes>
        </Navbar>
    )
    // console.log(Cookies.get("token"));
    return (
        <BrowserRouter>
            {token ? landingPages() :
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/*' element={<NotFound />} />
                </Routes>
            }
        </BrowserRouter>
    )
}

export default Router