import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import toast from 'react-hot-toast';


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const formData = {name, chef, supplier, taste, category, details, photo}
        axios.post('http://localhost:5000/coffees',formData, {
            headers: {
                'content-type': 'application/json'
            }
        })     
        .then(res => {
            if(res.data.acknowledged){
                console.log('success');
                toast.success('Successfully Added!')

            }
        })
        .catch(error => {
            toast.error(error.message)
          });
    }
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/5vQs5V3/body-BG-1.png)",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="min-h-screen md:w-3/4 mx-auto py-6">
        <Link className="font-rancho text-3xl drop-shadow-text my-6" to="/">
          {" "}
          <IoMdArrowBack className="inline"></IoMdArrowBack> Back to home
        </Link>

        <div>
          <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] py-14 md:px-20 my-11 px-2 rounded-md">
            <div className="text-center">
              <h3 className="font-rancho text-5xl text-[#374151] drop-shadow-text">
                Add New Coffee
              </h3>
              <p className="font-raleway my-5">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="font-raleway">
                <label className="text-xl" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="name"
                  id="name"
                />
              </div>
              <div className="font-raleway">
                <label className="text-xl" htmlFor="chef">
                  Chef
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="chef"
                  id="chef"
                />
              </div>
              <div className="font-raleway">
                <label className="text-xl" htmlFor="supplier">
                  Supplier
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="supplier"
                  id="supplier"
                />
              </div>
              <div className="font-raleway">
                <label className="text-xl" htmlFor="taste">
                  Taste
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="taste"
                  id="taste"
                />
              </div>
              <div className="font-raleway">
                <label className="text-xl" htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="category"
                  id="category"
                />
              </div>
              <div className="font-raleway">
                <label className="text-xl" htmlFor="details">
                  Details
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="details"
                  id="details"
                />
              </div>
              <div className="font-raleway md:col-span-2">
                <label className="text-xl" htmlFor="photo">
                  Photo
                </label>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="p-2 my-4 rounded-md outline-none w-full"
                  name="photo"
                  id="photo"
                />
              </div>
              <input
                type="submit"
                className=" cursor-pointer py-2 px-4 bg-primary text-secondery font-rancho text-2xl rounded-md border-2 border-secondery md:col-span-2"
                value="Add Coffee"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
