import React from "react";
import If,{Else} from "./If";
export default props =>{
    const usuario = props.usuario || {}
    return(
        <div>
            <If test = {usuario && usuario.nome}>
            Seja Bem Vindo <strong>{usuario.nome}</strong> !
            <Else>
                Seja Bem Vindo Parceiro
            </Else>
            </If>
             {/*maneira mais pratica de se fzr */}
            <If test = {!usuario || !usuario.nome}>
            Seja Bem Vindo <strong>Parceiro</strong> !
            </If>
            
         </div>
    )
}