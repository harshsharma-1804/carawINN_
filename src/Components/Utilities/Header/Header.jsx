import {Link,NavLink,useNavigate} from "react-router-dom";
import { useHeader } from "../../../Context/HeaderContext";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
// import { logoutThunk,getCurrentUserThunk } from "../../Thunks/user.thunks";

const Dropdown = (props) => {
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const redirectToDashboard=()=>{
    //     navigate('dashboard')
    // }
    // const getUser = async() =>{
    //     const user = await dispatch(getCurrentUserThunk())
    //     console.log(user)
    //     if(user){
    //         redirectToDashboard()
    //     }
    // }

    // const handleLogout = () => props.handleFunction();
    return (
        <div className="absolute right-0 w-30 pt-2 bg-transparent border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none transition-transform duration-300 transform origin-top">
            <div className="py-1">
                <NavLink
                    // onClick={getUser}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Your Profile
                </NavLink>
                <NavLink
                    to="dashboard/setting"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Settings
                </NavLink>
            </div>
            <div className="py-1">
                <NavLink
                //    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Sign out
                </NavLink>
            </div>
        </div>
    );
}

const Header = () => {
    // const [dropdownOpen, setDropdownOpen] = useState(false);


    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
    const {isSticky} = useHeader();

    // const isLoggedIn = useSelector((state) => state.User.isUserLoggedIn);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const redirectToLogin= () => {
    //     sessionStorage.setItem('redirectURL', window.location.pathname);
    //     // console.log('redirectURL', window.location.href);
    //     navigate('user/signin');
    // }
    
    // const handleFunction = () =>{
    //     if(!isLoggedIn){
    //         redirectToLogin();
    //     }else{
    //         dispatch(logoutThunk());
    //     }
    // }

    return (
        <header className={`top-0 left-0 right-0 z-50 p-1 ${isHomePage? 'fixed':'sticky bg-white'} ${isHomePage ? (isSticky ? 'bg-white text-black' : 'text-white'): 'text-black'} transition duration-300`}>
        {/* <header className={`absolute text-white top-0 left-0 right-0 z-50 p-1 `}> */}
            <nav className={`border-gray-200 px-4 lg:px-6 py-2.5`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='mx-2 my-2'>
                        <Link to="/">
                            <p className={`text-4xl font-semibold`}>caraw<span className='text-red-900'>INN</span></p>
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto text-lg"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    // className={({isActive}) =>
                                    //     `block py-2 pr-4 pl-3  ${isActive? "text-orange-900 font-bold":"inherit"} lg:hover:bg-transparent lg:border-0 hover:text-orange-900 lg:p-0`
                                    // }
                                    className="block py-2 pr-4 pl-3  lg:hover:bg-transparent lg:border-0 hover:text-orange-900 lg:p-0"
                                >
                                    <i className="fa-solid fa-phone-volume mx-2"/>Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    // className={({isActive}) =>
                                    //     `block py-2 pr-4 pl-3  ${isActive? "text-orange-900 font-bold":"inherit"} lg:hover:bg-transparent lg:border-0 hover:text-orange-900 lg:p-0`
                                    // }
                                    className="block py-2 pr-4 pl-3  lg:hover:bg-transparent lg:border-0 hover:text-orange-900 lg:p-0"

                                >
                                    <i className="fa-solid fa-clipboard-question mx-2"/>FAQs
                                </NavLink>
                            </li>
                            <li>
                            {/* {isLoggedIn? (
                                <div
                                    onMouseEnter={()=>setDropdownOpen(true)}
                                    onMouseLeave={()=>setDropdownOpen(false)}
                                    className="relative hover:text-orange-900 font-medium rounded-lg pl-5 mr-2 focus:outline-none">
                                <i className="fa-regular fa-circle-user"/>
                                {dropdownOpen && <Dropdown handleFunction={handleFunction}/>}
                                </div>
                            ): */}
                                <NavLink
                                    // onClick = {handleFunction}
                                    className={
                                        `block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 hover:text-orange-900 lg:p-0`
                                    }
                                >   
                                    Login
                                </NavLink>
                            {/* } */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;