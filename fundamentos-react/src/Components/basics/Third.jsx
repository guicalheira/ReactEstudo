import React from "react";
export default function Third(props){
    const random = Math.ceil(Math.random()*(props.maior-props.menor)-props.menor);
return(
    <div align>
        <h1>Gerador de número aleatório entre dois valores</h1>
        <p> O maior número é:
           <strong> {props.maior} </strong>
           o menor numero é:
           <strong> {props.menor} </strong>
           o número aleatório é:
           <strong> {random} </strong>
        </p>
    </div>

)
}