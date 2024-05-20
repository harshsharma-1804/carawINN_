// import bg-img from "../Resources/Images/Caravan_Outside/4..jpg"
import Button from "../../Utilities/Buttons/Button";

function Search(){
    return(
        <div className="search-area h-120">
            <div className="search-bg-image relative">
                <img className="h-100 w-full rounded-b-7xl" src="https://www.practicalcaravan.com/wp-content/uploads/2020/07/CVN_Advert_13297_Advertorial_Image2.jpg" alt="search-bg" />
                <div className="absolute top-0 h-100 w-full rounded-b-7xl opacity-25 bg-green-900">f</div>
                <div className="absolute top-0 h-100 w-full rounded-b-7xl opacity-80 bg-multi-gradient-image"></div>
                <div className="absolute top-1/2 text-center w-full">
                    <p className="text-white text-4xl tracking-widest font-merriweather">"No more Check-ins, Just do WHEEL-inn"</p>
                </div>
            </div>
            <div className="flex search-box mx-auto w-0.8 h-25 font-merriweather bg-white -translate-y-1/2 rounded-3xl border-b-4 ">
                <div className="h-full w-0.3 rounded-s-3xl border-r-2 ">
                    <p className="p-3 text-lg font-semibold">From</p>
                    <input type="text" className=" ml-4 p-2 w-0.8 text-gray-700 " placeholder="Delhi"/>
                </div>
                <div className="w-0 my-auto items-center m-0 p-0 -translate-x-1/2 h-fit w-fit rounded-full border bg-white border-gray-400 rounded-3xl">
                    <Button
                        className={`text-gray-700 font-merriweather rounded-none p-1 !bg-transparent !text-lg hover:rotate-180 transition duration-300 hover:scale-90 hover:bg-transparent`}
                        content={<i className="fa-solid fa-arrow-right-arrow-left"/>}
                    />
                </div>
                <div className="h-full w-0.3 border-r-2">
                    <p className="py-3 text-lg font-semibold">To</p>
                    <input type="text" className=" ml-4 p-2 w-0.8 text-gray-700 " placeholder="Mumbai"/>
                </div>
                <div className="h-full w-0.3 border-r-2">
                    <p className="p-3 font-semibold">Start</p>
                    <input type="date" className="ml-4 p-3 text-gray-700 " placeholder="Date"/>
                </div>
                <div className="h-full w-0.3 border-r-2">
                    <p className="p-3 font-semibold">Return</p>
                    <input type="date" className="ml-4 p-3 text-gray-700 " placeholder="Date"/>
                </div>
                <div className="h-full w-0.3 border-r-2">
                    <p className="p-3 font-semibold">Travellers</p>
                    <input type="text" className="text-3xl ml-4 w-0.3 p-1 text-gray-700 " placeholder="1"/><label className="text-sm">Traveller</label>
                </div>
                <div className="h-full w-0.2 border-r-2">
                    <input type="checkbox" className="h-4 w-4 my-6 mx-1"/><label>One Way</label><br/>
                    <input type="checkbox" className="h-4 w-4 mx-1"/><label>Round Trip</label>
                </div>
                <div className="h-full w-0.1 rounded-e-3xl">
                    {/* <i className="fa-solid fa-magnifyin-glass"/> */}
                    <Button className="bg-transparent hover:bg-transparent h-full w-full !text-2xl" content={<i className='fa-solid fa-magnifying-glass'/>}/>
                </div>
            </div>
        </div>
    )
}

export default Search;