import React from "react";
import First from './First';
import Second from './Second';
import Third from './Third';
export default function App(props){
return(
<div id='app'>
<First></First> 
<Second
 titulo="Capitulo 1"
 ></Second>
 <Third 
 maior = {100} 
 menor ={1}>
 </Third>
 </div>
)
}