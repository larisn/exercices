
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


function App() {
  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  )
}

export default App;
