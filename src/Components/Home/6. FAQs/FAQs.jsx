import FaqCard from "../../Utilities/Cards/FaqCard";

function FAQs(){
    return(
        <div>
            <div className="font-merriweather text-4xl mt-14 ml-10"><p>FAQs</p></div>
            <div className="m-10 mt-5">
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
            </div>
        </div>
    )
}

export default FAQs;