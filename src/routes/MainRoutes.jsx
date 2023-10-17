import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import ProductDetail from "../components/Products/ProductDetail";

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
            {
                path: '/coffees/:id', 
                element: <ProductDetail></ProductDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
        ]
    }
])

export default MainRoutes;