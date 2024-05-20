import Header from "../Utilities/Header/Header";
import Search from "./1. SearchArea/Search";
import Offers from "./2. Offers/Offers";
import RideAmenitites from "./3. RideAmenities/RideAmenities";
import Reviews from "./4. Reviews/Reviews";
import FAQs from "./6. FAQs/FAQs";

function Home() {
    return (
        <div className="home relative">
            <Search />
            <Offers />
            <RideAmenitites />
            <Reviews />
            <FAQs />
        </div>
    )
}

export default Home;