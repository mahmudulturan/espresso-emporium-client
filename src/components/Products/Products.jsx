import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import Product from "./Product";


const Products = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/coffees')
        .then(res => setCoffees(res.data))
        .catch(error => console.log(error))
    },[])
    console.log(coffees);
    
    return (
        <div className="py-20" style={{backgroundImage: 'url(https://i.ibb.co/ym9f52R/body-BG-2.png)'}}>
            <div className="md:w-3/4 mx-auto">
            <div className="text-center my-6">
                <p className="font-raleway text-[#1B1A1A]">--- Sip & Savor ---</p>
                <h3 className="font-rancho text-5xl drop-shadow-text mt-2 mb-4">Our Popular Products</h3>
                <Link to='/add' className="py-2 px-3 bg-primary rounded-md border-2 border-secondery"><span className="text-white font-rancho text-2xl drop-shadow-text">Add Coffee</span> <BiCoffee className="inline text-xl"></BiCoffee> </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees?.map(coffee => <Product key={coffee._id} coffee={coffee}></Product>)
                }
            </div>
            </div>
        </div>
    );
};

export default Products;