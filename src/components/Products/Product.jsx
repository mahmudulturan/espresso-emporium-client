import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

const Product = ({coffee}) => {
    const {name, chef, taste, photo, _id} = coffee;
    return (
        <div>
            <div className="flex gap-6 items-center justify-between py-6 px-6 bg-[#F5F4F1]">
                <img className="w-60 h-64" src={photo} alt={`image about ${name}`} />
                <div className="font-raleway space-y-3">
                <h3><span className="font-semibold">Name:</span> {name}</h3>
                <h3><span className="font-semibold">Chef:</span> {chef}</h3>
                <h3><span className="font-semibold">Taste:</span>{taste}</h3>
                </div>
                <div className="text-white flex flex-col gap-4">
                    <Link to={`/coffees/${_id}`}><button className="bg-[#D2B48C] text-xl py-1 px-1 rounded-md"><AiFillEye></AiFillEye></button></Link>
                    <button className="bg-[#3C393B] text-xl py-1 px-1 rounded-md"><MdModeEdit></MdModeEdit></button>
                    <button className="bg-[#EA4744] text-xl py-1 px-1 rounded-md"><AiFillDelete></AiFillDelete></button>
                </div>
            </div>
        </div>
    );
};



export default Product;