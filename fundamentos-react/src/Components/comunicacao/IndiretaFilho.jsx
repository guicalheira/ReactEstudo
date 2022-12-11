import React from "react";
export default (props) => {
  const cb = props.click
  const min = 30;
  const max = 80;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarBonito = ()=> Math.random() >0.5
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={_=> cb("João", gerarIdade(),gerarBonito())
        }
      >
        Fornecer Informações
      </button>
    </div>
  );
};
