function ReviewCardLeft(){
    return(
        <div className="review-card flex">
            <div className="cursor-pointer flex justify-center h-80 bg-gray-300 w-0.025 m-3 mr-0 rounded-s-xl">
                <i className="my-auto fa-solid fa-angle-left"></i>
            </div>
            <div className="h-80 bg-gray-300 w-0.25 m-3 ml-2"></div>
            <div className="h-80 bg-gray-300 w-0.7 m-3 mr-2"></div>
            <div className="cursor-pointer flex justify-center h-80 bg-gray-300 w-0.025 m-3 ml-0 rounded-e-xl">
                <i className="my-auto fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

function ReviewCardRight(){
    return(
        <div className="review-card flex">
            <div className="cursor-pointer flex justify-center h-80 bg-gray-300 w-0.025 m-3 mr-0 rounded-s-xl">
                <i className="my-auto fa-solid fa-angle-left"></i>
            </div>
            <div className="h-80 bg-gray-300 w-0.7 m-3 ml-2"></div>
            <div className="h-80 bg-gray-300 w-0.25 m-3 mr-2"></div>
            <div className="cursor-pointer flex justify-center h-80 bg-gray-300 w-0.025 m-3 ml-0 rounded-e-xl">
                <i className="my-auto fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}
export {ReviewCardLeft, ReviewCardRight};