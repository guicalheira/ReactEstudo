import React from "react";
import DiretaFilho from "./DiretaFilho";
export default props =>{
    return(
        <div>
            <DiretaFilho texto="Filho 1" numero ={5} bool = {false}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero ={9} bool = {true}></DiretaFilho>
            <DiretaFilho texto="Filho 3" numero ={0} bool = {false}></DiretaFilho>
            <DiretaFilho texto="Filho 4" numero ={10} bool = {true}></DiretaFilho>
        </div>
    )
}