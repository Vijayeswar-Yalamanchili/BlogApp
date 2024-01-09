import React from 'react';
import Home from '../components/Home';
import Dashboard from '../components/Dashboar';
import CreateBlog from '../components/CreateBlog';
import EditBlog from '../components/EditBlog';

const AppRoutes = [
    {
        path:'/',
        exact:true,
        element:<Home/>
    },
    {
        path:'/dashboard',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/createBlog',
        exact:true,
        element:<CreateBlog/>
    },
    {
        path:'/editBlog/:id',
        exact:true,
        element:<EditBlog/>
    },
    {
        path:'/',
        exact:false,
        element:<Navigate to='/home'/>
    }
]

export default AppRoutes