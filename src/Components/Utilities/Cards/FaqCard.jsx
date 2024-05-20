function FaqCard(){
    return (
        <div className="faq-card font-merriweather m-1 w-0.98 h-14 flex justify-between border-2 p-3 rounded-3xl">
            <div className="flex items-center faq-card-header">
                <span className="m-2">Q.</span><p>Question</p>
            </div>
            <div className="flex items-center faq-card-body mr-2">
                <i className="cursor-pointer fa-solid fa-angle-down"></i>
            </div>
        </div>
    )
}

export default FaqCard;