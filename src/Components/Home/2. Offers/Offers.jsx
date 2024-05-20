import topImg from "../../../Resources/Images/Caravan_Outside/6_.jpeg"
import OfferCard from "../../Utilities/Cards/OfferCard";

function Offers(){
    return(
        <div>
            <div className="text-center">
                <p className="text-3xl font-semibold"><i className=" mx-3 text-xl w-0.05 fa-solid fa-angles-down"></i>Explore More<i className=" mx-3 text-xl w-0.05 fa-solid fa-angles-down"></i></p>
            </div>
            <div className="relative w-0.8 h-80 mx-auto my-6">
                <img className="w-full h-full rounded-inherit rounded-ss-8xl rounded-se-8xl rounded-es-8xl rounded-ee-8xl" src={topImg}/>
                <div className="absolute top-0 bg-black opacity-30 h-full w-full rounded-ss-8xl rounded-se-8xl rounded-es-8xl rounded-ee-8xl"></div>
                <div className="absolute top-0.3 left-0.1 text-white font-merriweather">
                    <p className="text-7xl">&ldquo; Travel INN</p>
                    <p className="text-2xl mt-5 ml-8 tracking-widest">your home on WHEELS &rdquo;</p>
                </div>
            </div>
            <div className="my-14">
            <p className="font-merriweather text-4xl ml-10">Offers & Discounts</p> 
                <div className="flex my-3 mx-2">
                    <OfferCard title="Offer Title" description=" Get flat 20% off on booking your 1st luxury ride from the fleet." discount="20" type="Flat"/>
                    <OfferCard title="Offer Title" description=" Get flat 20% off on booking your 1st luxury ride from the fleet." discount="20" type="Flat"/>
                    <OfferCard title="Offer Title" description=" Get flat 20% off on booking your 1st luxury ride from the fleet." discount="20" type="Flat"/>
                    <OfferCard title="Offer Title" description=" Get flat 20% off on booking your 1st luxury ride from the fleet." discount="20" type="Flat"/>
                </div>
            </div>
        </div>
    )
}

export default Offers;