
import { useState } from "react";

function Condicional() {
   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()

   function enviarEmail(e) {
      e.preventDefault()
      setUserEmail(email)
      console.log(userEmail)
   }

   function limparEmail() { 
      setUserEmail('') // valor vazio para gerar um false
   }

   return (
      <div>
         <h2>Cadastre o seu e-mail:</h2>
         <form>
            <input 
               type="email" 
               placeholder="Digite seu e-mail" 
               onChange={(e) => setEmail=(e.target.value)} 
               />
               <button type="submit" onClick={enviarEmail}>
                  Enviar e-mail
               </button>
               
               {/* renderização condicional */}

               {userEmail && ( 
                  <div>
                     <p>O e-mail do usuário é: {userEmail}</p>
                     <button onClick={limparEmail}>Limpar e-mail</button>
                  </div>
                  // Checa se o userEmail é true (para ser true basta ter algum valor). 
                  // Se o userEmail for preenchido, imprime o bloco de código.
               )}
         </form>
      </div>
   )
}

export default Condicional;

