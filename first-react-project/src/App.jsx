
import { useEffect, useState } from 'react';
import Condicional from './components/Condicional';
import './index.scss'
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
// import List from "./components/List";
// import Form from "./components/Form";
// import Evento from "./components/Evento";


// function App() { 
//   const name = 'Larissa'
//   const newName = name.toLocaleUpperCase()
//   function sum(a, b) {
//     return a + b
//   }
//   const url = 'https://via.placeholder.com/150'
//   return (
//     <div className="App">
//       <h1>Alterando o JSX</h1>
//       <p>Olá, {newName}</p>
//       <p>Soma: {sum(1, 2)}</p>
//       <img src={url} alt="Minha imagem" />
//       <HelloWorld/>
//     </div>
//   );
// }
// export default App;


// function App() {
//   const nome = 'Manu'
//   return (
//     <div className="App">
//       <h1>Testando SCSS</h1>
//       <Frase />
//       <Frase />
//       <SayMyName nome="Larissa" /> 
//       <SayMyName nome={nome} />
//       <Pessoa 
//         nome="Lorraine"
//         idade="20"
//         profissao="Estudante"
//         foto="https://via.placeholder.com/150"
//       />
//       <List />
//     </div>
//   )
// }
// export default App;


// function App() {
//   return (
//     <div className="App">
//       <h1>Testando Eventos</h1>
//       <Evento numero="1" />
//       <Form />
//     </div>
//   )
// }
// export default App;


// function App() {
//   return (
//     <div className="App">
//       <h1>Renderização condicional</h1>
//       <Condicional />
//     </div>
//   )
// }

// export default App;


// function App() {
//   const [valueInput, setValueInput] = useState('Larissa')
//   const onChangeInput = (e) => {
//     setValueInput(e.target.value)
//   }
//   return (
//     <div>
//       <div className="App">
//         <input onChange={onChangeInput}></input>
//       </div>
//       <h3>{valueInput}</h3>
//     </div>
//   )
// }

// export default App;


// function App() {
//   const [count, setCount] = useState(0)
//   // let count = 0
//   const add = () => {
//     setCount(count + 1)
//     console.log(count)
//     /* count = count + 1 (por ser uma 
//     constante não funciona assim) */
//   }
// }

// export default App;


// function App() {

//   const [count, setCount] = useState(0)


//   // vai renderizar sempre
//   useEffect(() => {
//     console.log('Renderiza Sempre')
//   })

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log(`O count foi executado ${count}`)
//     }, 1000)
//     return () => {
//       clearTimeout(timer)
//     }
//   }, [count])

//   useEffect(() => {
//     console.log('Renderiza na primeira vez que a página é carregada')
//   }, []) // array de dependência - depende do array pra fazer alguma coisa
//   // dentro desse array podemos controlar quando o useEffect será disparado


//   return (
//     <div className="App">
//       <div className="card">
//         <p>Foi renderizado {count}</p>
//         <button onClick={() => setCount((count) => count + 1)}>Render</button>
//       </div>
//     </div>
//   )
// }

// export default App;


// Request API

function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    fetch('https://api.github.com/users/larisn/repos')
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])

  /* Como o data é um dado assíncrono, demora um pouco pra carregar, então 
  é bom colocar algum if. 

  Também para evitar do data ser undefined quando o código ler o data do h3 
  porque ele está começando com uma string vazia no useEffect, então ele só
  seria renderizado quando o data passasse a existir
  
  */

  if (!data) {
    return <p>loading</p>
  }
  return (
    <div className="App">
      {/* <h3>Name: {data.name}</h3> */}
      <h3>Repos: {data.map((repo) => repo.full_name)}</h3>
      <div className="card">
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>
    </div>
  )
}

export default App;
