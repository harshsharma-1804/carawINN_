import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderProvider } from '../Context/HeaderContext';
import Home from "../Components/Home/Home";
import Footer from "../Components/Utilities/Footer/Footer";
import Header from "../Components/Utilities/Header/Header";

function Page1(){
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 220) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle button click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return(
        <HeaderProvider>
        <div className='scroll-smooth'>
            <Header/>
            <Home />
            <Footer />
            {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-14 right-8 h-10 w-10 bg-white border-gray-400 border-2 rounded-xl flex items-center justify-center fa-solid fa-arrow-up"
                    />
                )}
        </div>
        </HeaderProvider>
    )
}

export default Page1;