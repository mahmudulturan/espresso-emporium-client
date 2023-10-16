import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: "url(https://i.ibb.co/nbf4vg6/footerBG.jpg)",
        }}>
        <div className="py-16 px-2 md:w-3/4 mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1">
                <img className="w-16" src="https://i.ibb.co/z2M8xtr/logo1.png" alt="" />
                <h3 className="font-rancho text-secondery text-5xl drop-shadow-text my-4">Espresso Emporium</h3>
                <p className="font-raleway text-xl my-6">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="flex gap-4 text-4xl text-secondery">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaLinkedin></FaLinkedin>
                </div>
                <h3 className="font-rancho text-secondery text-5xl drop-shadow-text my-6">Get In Touch</h3>
                <div className="space-y-3">
                    <div className="flex gap-3 items-center"><FaPhoneAlt></FaPhoneAlt> <span className="font-raleway text-lg">+88 01533 333 333</span></div>
                    <div className="flex gap-3 items-center"><IoMdMail></IoMdMail> <span className="font-raleway text-lg">info@gmail.com</span></div>
                    <div className="flex gap-3 items-center"><FaLocationDot></FaLocationDot> <span className="font-raleway text-lg">72, Wall street, King Road, Dhaka</span></div>
                </div>
          </div>
          <div className="flex-1">
                <h3 className="font-rancho text-secondery text-5xl drop-shadow-text my-6">Connect with Us</h3>
                <form className="flex flex-col gap-4 items-start">
                    <input className="rounded-md p-3 outline-none w-full" placeholder="Name" type="text" name="name" id="" />
                    <input className="rounded-md p-3 outline-none w-full" placeholder="Email" type="email" name="email" id="" />
                    <textarea className="rounded-md p-3 outline-none w-full" placeholder="Message" name="message" id="" cols="40" rows="5"></textarea>
                    <button className="text-secondery py-2 px-4 border-2 border-secondery rounded-full font-rancho text-2xl" > Send Message</button>
                </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
