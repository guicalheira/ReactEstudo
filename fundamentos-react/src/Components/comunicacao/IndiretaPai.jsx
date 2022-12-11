import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";
export default (props) => {

const [nome, setNome] = useState("?")
const [idade, setIdade] =useState (0)
const [bonito, setBonito] = useState (false)
  function fornecerInformacoes(nome, idade, bonito) {
setNome (nome)
setIdade (idade)
setBonito (bonito)
  }

  return (
    <div>
      <span>{nome} </span>
      <span><strong>{idade}</strong> </span>
      <span> {bonito ? "É Bonito": "É Feio" }</span>
      <IndiretaFilho click={fornecerInformacoes}> </IndiretaFilho>
    </div>
  );
};
