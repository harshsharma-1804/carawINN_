import {NavLink} from 'react-router-dom';

function OfferCard(props){
    return(
        <div className="offer-card m-10">
            <div className="offer-card__image relative">
                <img className="w-80 h-100 rounded-5xl" src="https://via.placeholder.com/150" alt="offer"/>
                <div className="absolute top-8 left-8">
                <p className="font-shadows font-light text-5xl">{props.type} </p>
                <p className="font-shadows text-2xl m-2">{props.discount}% off</p>
                </div>
            </div>
            <div className="offer-card__content m-3">
                <p className="text-3xl">{props.title}</p>
                <p className="py-3">{props.description}</p>
                <NavLink to={props.path}><p className="underline font-merriweather font-semibold">Check Now</p></NavLink>
            </div>
        </div>
    )
}

export default OfferCard;