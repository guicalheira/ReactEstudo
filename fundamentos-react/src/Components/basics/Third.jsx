import React from "react";
export default function Third(props){
    const random = Math.ceil(Math.random()*(props.maior-props.menor)-props.menor);
return(
    <div>
        <h2>Gerador de número aleatório entre dois valores</h2>
        <p> 
        <strong> O maior número é: </strong>{props.maior} 
        </p>
           <p>
           <strong> O menor numero é: </strong> {props.menor} 
           </p>
           <p>
           <strong>  O número aleatório é: </strong> {random} 
        </p>
    </div>

)
}