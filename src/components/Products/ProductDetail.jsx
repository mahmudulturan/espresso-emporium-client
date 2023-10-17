import { useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const loadedProduct = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    loadedProduct;
  return (
    <div className="my-16 md:w-3/4 mx-auto ">
      <Link className="font-rancho text-3xl drop-shadow-text my-6" to="/">
        <IoMdArrowBack className="inline"></IoMdArrowBack> Back to home
      </Link>
      <div className="my-6">
        <div className=" flex gap-6 justify-evenly items-center py-20 px-6 bg-[#F5F4F1]">
          <img className="w-60 h-64" src={photo} alt={`image about ${name}`} />
          <div className="font-raleway space-y-3">
            <h3>
              <span className="font-semibold">Name: </span> {name}
            </h3>
            <h3>
              <span className="font-semibold">Chef: </span> {chef}
            </h3>
            <h3>
              <span className="font-semibold">Supplier: </span>
              {supplier}
            </h3>
            <h3>
              <span className="font-semibold">Taste: </span>
              {taste}
            </h3>
            <h3>
              <span className="font-semibold">Category: </span>
              {category}
            </h3>
            <h3>
              <span className="font-semibold">Details: </span>
              {details}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
