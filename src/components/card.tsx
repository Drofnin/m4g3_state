import "./card.css"
/*import { CSSProperties } from "react";*/
import React, { useState, CSSProperties } from 'react';

type Props = {
    name: string;
    date: string;
    style?: CSSProperties; 
    image: string;
    onClick?:()=> void;
    
}
const Card = ({name, date, style, image, onClick }:Props) => {

        const[isClicked, setIsClicked]=useState (false);
        const handleClick = () => {
            setIsClicked(!isClicked);
            if (onClick) onClick();
        }
    
    return(

        <div className="birthday-card" style={style}>
            <div>{date}</div>
            <div className = "greeting">
                    {isClicked ? `Til hamingju með daginn, ${name}!`: 'smelltu á kökuna!'} </div>

            <button onClick={handleClick} 
                className="cake-button"
                style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >

            <img src={image} alt="cake" className="cake-image"/>
            </button>
        </div>
    )
}

export default Card;