import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Signin from "../pages/auth/signin";
import SignUp from "../pages/auth/SignUp";


export const routerPages = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sign-in",
        element: <Signin />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "*",
        element: <div>404</div>,
    }
])