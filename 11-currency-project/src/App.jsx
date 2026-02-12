import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import { InputBox } from './components';
import useCurrencyInfo from './hooksCurrencyInfo';
function App() {
  const [count, setCount] = useState(0)
  const [amount,setAmount] = useState(0)
  const [from ,setFrom] = {useState("usd")
  const [convertedAmount,setConvertedAmount]= useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  }

  function App(){
    const [count,setCount]=useState("usd")
  }
  return (
    <>
    <h1 className='text-3xl bg-orange-500 '>Currency app with chai</h1>
     </>
  )
}

export default App
