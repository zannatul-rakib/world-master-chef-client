import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/chef/:id",
                element: <ChefDetails />,
                loader: ({params})  => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <Error/>
    }
])

export default router;