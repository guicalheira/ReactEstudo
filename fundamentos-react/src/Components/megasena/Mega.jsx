import React,{useState} from "react";
import "./Mega.css"

export default (props)=>{
    function geraNumeroNaoContido(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random)
          ? geraNumeroNaoContido(min, max, array)
          : random;
      }
      function gerarNumeros(qtd) {
          const numeros = Array(qtd)
          .fill(0)
          .reduce((nums)=>{
              const novoNumero =geraNumeroNaoContido(1,60,nums)
             
              return[...nums,novoNumero]
          },[])
         
        return numeros
      }
      const [qtd,setQtd] = useState(props.qtd || 6)
      const numerosIniciais = Array(qtd).fill(0)
      const[numeros,setNumeros]= useState(numerosIniciais)  
     
    return(
        <div className="mega">
            <h2>Mega</h2>
            <div className="quantidade">
            <label><strong>Quantidade de Numeros: </strong></label>
            <input 
            type="number" 
            value={qtd}
            onChange={e =>setQtd(+e.target.value)}/>
            </div>
            <h3 >{numeros .join(" ")}</h3>
            <button onClick={_ =>setNumeros(gerarNumeros(qtd))}>Gerar Numeros</button>
        </div>
    )

}