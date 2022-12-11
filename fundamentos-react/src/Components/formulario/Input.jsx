import React, {useState} from "react";
import "./Input.css"
export default props => {
    const [valor,setValor] = useState('Inicial')
    function change (e){
        setValor(e.target.value)
       
    }
    return(
        <div className="Input">
            <div style=
            {
                {
                display:"flex",
                flexDirection:"column" 
        }
        }>
            <h2>{valor}</h2>
            <input value={valor} onChange = {change} />
            <input value={valor} readOnly />
            <input value={undefined}/>
            </div>
        </div>
    )
}