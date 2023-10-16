import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element: <RootElement></RootElement>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            },
            {
                path: '/add', 
                element: <AddCoffee></AddCoffee>
            },
        ]
    }
])

export default MainRoutes;