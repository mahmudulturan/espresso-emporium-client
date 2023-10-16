/* eslint-disable react/no-unescaped-entities */
import bannerBg from "../../assets/bannerBG.png";
import { BsFillCupHotFill, BsFillBagCheckFill } from "react-icons/bs";
import { GiCoffeeBeans } from "react-icons/gi";
import { BiSolidCoffeeTogo } from "react-icons/bi";


const Banner = () => {
  return (
    <div>
      <div
        className="flex"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
        }}>
        <div className="md:flex-1"></div>
        <div className="flex-1 min-h-screen flex flex-col items-start justify-center md:w-3/4 mx-auto px-2">
          <h1 className="text-5xl font-rancho text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="font-raleway text-white my-3 max-w-3xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="font-rancho py-2 px-4 my-6 bg-primary text-2xl hover:bg-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="md:w-3/4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-2 py-8">
            <div>
                <BsFillCupHotFill className="text-4xl my-2"></BsFillCupHotFill>
                <h1 className="text-3xl font-rancho">Awesome Aroma</h1>
                <p className="font-raleway">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <BsFillBagCheckFill className="text-4xl my-2"></BsFillBagCheckFill>
                <h1 className="text-3xl font-rancho">High Quality</h1>
                <p className="font-raleway">We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <GiCoffeeBeans className="text-4xl my-2"></GiCoffeeBeans>
                <h1 className="text-3xl font-rancho">Pure Grades</h1>
                <p className="font-raleway">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <BiSolidCoffeeTogo className="text-4xl my-2"></BiSolidCoffeeTogo>
                <h1 className="text-3xl font-rancho">Proper Roasting</h1>
                <p className="font-raleway">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
