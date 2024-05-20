import { ReviewCardLeft, ReviewCardRight } from "../../Utilities/Cards/ReviewCard"

function Reviews(){
    return(
        <div>
            <div className="font-merriweather text-4xl ml-10"><p>Know from the travel stories</p></div>
            <div className="w-0.95 my-5 mx-auto">
                <ReviewCardLeft />
                <ReviewCardRight />
            </div>
        </div>
    )
}

export default Reviews;