import "./App.css";
import Input from "./Components/formulario/Input";
import React from "react";
import DiretaPai from "./Components/comunicacao/DiretaPai";
import ParOuImpar from "./Components/condicional/ParOuImpar";
import Third from "./Components/basics/Third";
import Card from "./Components/layout/Card";
import UsuarioInfo from "./Components/condicional/UsuarioInfo";
import Familia from "./Components/basics/Familia";
import FamiliaMembro from "./Components/basics/FamiliaMembro";
import TabelaProdutos from "./Components/repeticao/TabelaProdutos";
import IndiretaPai from "./Components/comunicacao/IndiretaPai";
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo = "Componente Controlado" color= "#829079">
          <Input></Input>
        </Card>
        <Card titulo="Desafio Aleatório" color="#26495c">
          <Third maior={100} menor={1} />
        </Card>
        <Card titulo="Comunicação Direta" color="#c4a35a">
         <DiretaPai/>
        </Card>
        <Card titulo="Comunicação Indireta" color="#1978a5">
         <IndiretaPai/>
        </Card>
        <Card titulo="Renderização Condicional" color=" #c66b3d">
          <ParOuImpar numero = {16}/>
        </Card>
        <Card titulo="#02 Renderização Condicional" color="#e5e5dc">
          <UsuarioInfo usuario= {{nome: "Guilherme"}}></UsuarioInfo>
          <UsuarioInfo usuario= {{}}></UsuarioInfo>
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
