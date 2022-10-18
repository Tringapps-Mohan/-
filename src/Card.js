import React from "react";
import './Card.css';
function Card(props){
    return (
        <div>
            {Object.entries(props).map(e=>`${e[0]}:${e[1]}`)}
        </div>
    )
}

export default Card;