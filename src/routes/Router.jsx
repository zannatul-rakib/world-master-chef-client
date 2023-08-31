import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Blogs from "../Pages/Blogs/Blogs";
import Recipes from "../Pages/Recipes/Recipes";
import ChefPage from "../Pages/ChefPage/ChefPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/chef/:id",
                element: <PrivateRouter><ChefDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://world-master-chef-server-zrakib-dev.vercel.app/chef/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blogs />
            },
            {
                path: 'chef',
                element: <ChefPage />
            },
            {
                path: 'recipes',
                element: <Recipes />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "*",
        element: <Error />
    }
])

export default router;