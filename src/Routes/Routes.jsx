import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import UpdateProfile from "../Components/Navbar/UpdateProfile";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";


import PrivateRoutes from "./PrivateRoutes";
import Properties from "../Components/Properties/Properties";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

import Location from "../Components/Location/Location";

import Reviews from "../Components/Reviews/Reviews";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/residential.json')
            },
            {
                path: '/updateProfile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/location',
                element: <PrivateRoutes><Location></Location></PrivateRoutes>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                
                path: '/properties/:id',
                element: <PrivateRoutes><Properties></Properties></PrivateRoutes>,
                loader: ()=> fetch('/residential.json')
            }
        ]
    }
])
export default routes;