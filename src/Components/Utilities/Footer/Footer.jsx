// import linkedinLogo from '/src/assets/linkedin.svg';
import tweetLogo from '../../../Resources/Logos/twitter.svg'
// import youtubeLogo from '/src/assets/youtube.svg'
import whatsAppLogo from '../../../Resources/Logos/whatsapp.svg'
import facebookLogo from '../../../Resources/Logos/facebook.svg'
import instagramLogo from '../../../Resources/Logos/instagram.svg'
import {Link, NavLink} from 'react-router-dom';

export default function Footer(props) {
    return (
        <footer className="footer relative h-65 bg-black bg-opacity-80 text-white">
        <div className='absolute top-0 h-full w-full bg-black opacity-50 -z-10'></div>
            <div className='flex flex-wrap justify-between mx-10 border-b border-b-slate-500'>
                <div className='mx-20 my-20'>
                    <Link to="/">
                        <p className='text-6xl'>caraw<span className='text-red-900'>INN</span></p>
                    </Link>
                </div>
                <div className='flex my-auto mr-15'>
                    <div className='mx-10'>
                        <p className='text-xl font-semibold pb-2'>Company</p>
                        <ul className='font-light text-base'>
                            <li className='w-fit hover:font-normal'><NavLink>About</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Investors</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Partners</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Careers</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='mx-10'>
                        <p className='text-xl font-semibold pb-2'>Discover</p>
                        <ul className='font-thin text-base'>
                            <li className='w-fit hover:font-normal'><NavLink>Home</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Packages</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Services</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Products</NavLink></li>
                            <li className='w-fit hover:font-normal'><NavLink>Fleet</NavLink></li>
                        </ul>
                    </div>
                    <div className='mx-10'>
                    <p className='text-xl font-semibold pb-2'>Follow Us</p>
                        <div className='grid grid-rows-2 grid-cols-2'>
                        <NavLink className="m-1"><img src={facebookLogo} alt="facebooklogo" className=' grid-item h-6 w-6 mx-2 my-2' /></NavLink>
                        <NavLink className="m-1"><img src={instagramLogo} alt="instagramlogo" className=' grid-item h-6 w-6 mx-2 my-2' /></NavLink>
                        <NavLink className="m-1"><img src={tweetLogo} alt="teeterlogo" className=' grid-item h-6 w-6 mx-2 my-2' /></NavLink>
                        <NavLink className="m-1"><img src={whatsAppLogo} alt="whatsapplogo" className="grid-item h-6 w-6 mx-2 my-2" /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-10 my-3 text-xs flex flex-wrap">
                    <span > &copy;2024 carawINN Ltd.</span>
                    <span>
                    <ul className='flex flex-wrap list-disc ml-5'>
                        <li className='mx-5 underline hover:no-underline'><NavLink>Privacy Policy</NavLink></li>
                        <li className='underline hover:no-underline'><NavLink>Terms & Conditions</NavLink></li>
                    </ul></span>
            </div>
        </footer>
    );
}