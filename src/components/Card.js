import React from 'react';
import './Card.css';

//Destructuring the props
const Card = ({name, email, id}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 shiny-card code near-white">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;