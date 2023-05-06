import { useState } from "react";
import React from "react";

function StarRating (){

    let [rating, setRating] = useState(0)
    let [hover, setHover] = useState(0)
    
    return(
        <div className="star-group">
            {[...Array(5)].map((value,index)=>{
                index += 1
                return(
                    <button
                    type="button"
                    className={index <= (hover || rating)? "on": "off"}
                    key={index}
                    onClick={()=>setRating(index)} 
                    onMouseEnter={()=>setHover(index)}
                    onMouseLeave={()=>setHover(rating)}>
                        <span>&#9733;</span>
                    </button>
                )
            })}
            <p>{rating} of 5</p>
        </div>
    )
}

export default StarRating;