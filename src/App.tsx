import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const user = {

  name : 'Geralt Rivia',
  imageUrl: 'https://www.ecured.cu/images/f/ff/Geralt_de_Rivia.jpg',
  imageUrl2: 'https://www.somosxbox.com/wp-content/uploads/2015/03/The_Witcher_3_23.re_.jpg',
  imageSize : 90,
};

function MyButton() {
  return (
    <button className='ButtomTest'>Soy un botón</button>
  );
}

function Witcher(){
  return(
    <p>Login Form</p>
  )
}

function Butcher(){
  return(
    <p>Login Admin</p>
  )
}


function App() {
  const [count, setCount] = useState(0)
  const [IsWitcher, setIsForm] = useState(false);

let content;
if(IsWitcher){
  content = <Witcher />
}else{
  content = <Butcher />
}




// const showTitle = count>5?<p>Hola mundo</p>:<h1>jajajaj + React</h1>
  return (
    <>
      <div>
        <h1>Prueba</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        {/* {count>5?<p>Hola mundo</p>:<h1>jajajaj + React</h1>} */}
      <div className={count>=2?"card":"  hola"}>
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
     {IsWitcher ?<img src={user.imageUrl} alt="" className='ImageGeralt'/> : <img src={user.imageUrl2} alt="" className='ImageGeralt'/>  }
    
<div><button onClick={()=> setIsForm(!IsWitcher)}>
 {IsWitcher ? 'Brujo' : 'Carnicero'}
 </button>

 </div>
 
 
    
   
    </>
  )



}



export default App
