import React from "react";
export default props=>{
    const situacao = props.nota >=7 ?'Aprovado' : 'Reprovado' 
    return(
    <div>
        <h2>Situação do Aluno</h2>
        <p>
          <strong> Aluno: {props.aluno} </strong> 
        </p>
        <p>
           {props.aluno} Tirou nota :{props.nota} 
        </p>
        <p>
            Guilherme está <strong>{situacao}</strong>
        </p>
    </div>


    )
}