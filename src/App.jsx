import { useState} from 'react'
import Search from './assets/icons/search.svg'
import './App.css'
import { useStateContext } from './Context';
import BackgroundLayout from './Componets/BackgroundLayout';

function App() {
  const [input, setInput] = useState('');
  //  const {weather} = useStateContext();
  // console.log(weather);

  return (
    <div className='w-full h-screen text-black px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-red-500 w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={Search} alt="search" className='w-[1.5rem] h-[1.5rem]'/>
          <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} className='focus:outline-none w-full text-[#212121] text-lg'/>

        </div>
      </nav>
      <BackgroundLayout />
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>

      </main>
    </div>
  )
}

export default App
