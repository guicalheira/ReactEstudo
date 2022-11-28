import ReactDom from 'react-dom';
import './index.css'
import App from './Components/basics/App';

const el = document.getElementById ('root') 
const txt = document.getElementById ('text')
ReactDom.render(<h1> Oi Aqui começa algo S2!!</h1>, el);
ReactDom.render(
<div>
<App>

 </App>
</div>
 ,txt
     )