import ReactDom from 'react-dom';
import './index.css'
import First from './Components/basics/First';

const el = document.getElementById ('root') 
const txt = document.getElementById ('text')
ReactDom.render(<h1> Oi meu amor S2!!</h1>, el);
ReactDom.render(<First></First>,txt)