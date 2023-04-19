
import { useState } from "react"

function Form() {

   function cadastrarUsuario(e) {
      e.preventDefault()
      console.log(`Usuário ${name} foi cadastrado com a senha: ${password}.`) 
      // seria a resposta para o usuário até o envio dos dados para o backend
   }

   const [name, setName] = useState(0)
   const [password, setPassword] = useState(0)

   return (
      <div>
         <h1>Meu cadastro:</h1>
         <form onSubmit={cadastrarUsuario}>
            <div>
               <label htmlFor="name">Nome:</label>
               <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Digite seu nome"
                  // value={name}
                  onChange={(e) => setName(e.target.value)}
                  // a cada letra digitada, o valor será alterado no state
               />
            </div>

            <div>
               <label htmlFor="password">Senha:</label>
               <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Digite a sua senha" 
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>

            <div>
               <input 
                  type="submit" 
                  value="Cadastrar" 
               />
            </div>
         </form>
      </div>
   )
}



