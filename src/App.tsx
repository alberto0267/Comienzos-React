import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// /Constantes/ 

const user = {

  name: 'Geralt Rivia',
  imageUrl: 'https://www.ecured.cu/images/f/ff/Geralt_de_Rivia.jpg',
  imageUrl2: 'https://www.somosxbox.com/wp-content/uploads/2015/03/The_Witcher_3_23.re_.jpg',
  imageSize: 90,
};

function MyButton() {
  return (
    <button className='ButtomTest'>Soy un botón</button>
  );
}

const products = [
  { title: "Espadas", isFast: true, id: 1 },
  { title: "Mazo", isFast: false, id: 2 },
  { title: "Lanza", isFast: false, id: 3 },
];

const listTakeBattle = [

  { title: "Pocion", isButcher: true, id: 1 },
  { title: "Espada plata", isButcher: true, id: 2 },
  { title: "Espada de acero", isButcher: false, id: 3 },
  { title: "Arrd", isButcher: false, id: 4 },
]

function TakeRealBattleButcher() {
  const listBattle = listTakeBattle.map(list =>

    <li
      key={list.id}
      style={{
        display: list.isButcher ? "none" : "block"
      }}

    >
      {list.title}

    </li>


  )
  return (
    <p>{listBattle} </p>

  );
}
function TakeRealBattleNotButcher() {
  const listBattle = listTakeBattle.map(list =>


    <li
      key={list.id}
      style={{
        display: list.isButcher ? "Block" : "none"
      }}

    >
      {list.title}

    </li>


  )
  return (
    <p>{listBattle} </p>

  );
}

function Espadas() {


  const listItems = products.map(product =>

    <li
      key={product.id}
      style={{
        color: product.isFast ? 'gold' : "gray"

      }}
    >
      {product.title}

    </li>
  )
  return (
    <ul>{listItems}  </ul>
  )
}

// function Witcher(){

// }

// function Butcher(){

// }


function App() {
  const [count, setCount] = useState(0)
  const [IsWitcher, setIsForm] = useState(false);

  // let content;
  // if(IsWitcher){
  //   content = <Witcher />
  // }else{
  //   content = <Butcher />
  // }




  // const showTitle = count>5?<p>Hola mundo</p>:<h1>jajajaj + React</h1>
  return (
    <>
      <div>
        <h1>Prueba</h1>
        <h1>PRUEBA de cambio GIT HUB</h1>
        <h1></h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* {count>5?<p>Hola mundo</p>:<h1>jajajaj + React</h1>} */}
      <div className={count >= 2 ? "card" : "  hola"}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Aquí estamos llamando al componente App2 */}
      <h2>Bienvenido a mi Aplicacion desde aqui</h2>
      <MyButton />


      {/* Llamo a renderizado */}

      <h2>{user.name}</h2>
      {IsWitcher ? <img src={user.imageUrl} alt="" className='ImageGeralt' /> : <img src={user.imageUrl2} alt="" className='ImageGeralt' />}

      <div><button className='ImageGeralt' onClick={() => setIsForm(!IsWitcher)}>
        {IsWitcher ? 'Brujo' : 'Carnicero'}
      </button>
        <h2>Que arma llevar?</h2>
        {IsWitcher ? <TakeRealBattleButcher /> : <TakeRealBattleNotButcher />}





      </div>

      <h2>Son rapidas sus armas?</h2>
      <Espadas />


    </>
  )



}



export default App
