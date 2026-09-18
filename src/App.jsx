import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router/dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import Movies from "./pages/Movies";

import AboutUS from "./pages/AboutUS";


const router = createBrowserRouter([

    {

        path: "/",

        Component: MainLayout,

        children: [

            {

                index: true,

                element: <Home />

            },

            {

                path: "/movies",

                element: <Movies />

            },

            {

                path: "/about",

                element: <AboutUS />

            }

        ]

    }

]);


function Router() {

    return (

        <RouterProvider router={router} />

    );

}


export default Router;



