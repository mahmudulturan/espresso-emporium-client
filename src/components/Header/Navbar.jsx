import navbarBG from '../../assets/navbarBG.jpg'
import logo from '../../assets/logo1.png'

const Navbar = () => {
    return (
        <div>
            <nav  style={{backgroundImage: `url(${navbarBG})`}}>
                <div className='flex items-center gap-4 justify-center py-4'>
                    <img className='w-16' src={logo} alt="" />
                    <h3 className='font-rancho text-2xl md:text-4xl lg:text-6xl text-white'>Espresso Emporium</h3>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;