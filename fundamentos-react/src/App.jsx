import "./App.css";
import React from "react";
import First from "./Components/basics/First";
import Second from "./Components/basics/Second";
import Third from "./Components/basics/Third";
import Card from "./Components/layout/Card";
import Condicional from "./Components/basics/Condicional";
import Familia from "./Components/basics/Familia";
import FamiliaMembro from "./Components/basics/FamiliaMembro";
import TabelaProdutos from "./Components/repeticao/TabelaProdutos";
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Desafio Aleatório" color="#26495c">
          <Third maior={100} menor={1} />
        </Card>
        <Card titulo="Fragmento" color="#c4a35a">
          <First />
        </Card>
        <Card titulo="Parametros" color=" #c66b3d">
          <Second titulo="Com Parametro" />
        </Card>
        <Card titulo="Condicional" color="#e5e5dc">
          <Condicional aluno="Guilherme" nota={8.7} />
        </Card>
        <Card titulo="ComponenteFilho">
          <Familia sobrenome="Rocha">
            <FamiliaMembro nome="Ana"></FamiliaMembro>
            <FamiliaMembro nome="Luiz"></FamiliaMembro>
            <FamiliaMembro nome="Liz"></FamiliaMembro>
          </Familia>
        </Card>
        <Card titulo="Repetição" color='#e52165'>
          <TabelaProdutos></TabelaProdutos>
        </Card>
      </div>
    </div>
  );
};
