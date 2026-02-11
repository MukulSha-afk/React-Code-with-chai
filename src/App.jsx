import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState
  (false);
  const[specialCharAllowed, setSpecialCharAllowed] = useState(false);
 const[password, setPassword] = useState('')

 const generatePassword = useCallback(() => {
  let pass = " "
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+= "0123456789"
  if(specialCharAllowed) str+= "!@#$%^&*()_+"
  for(let i=1; i<=length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass+= str.charAt(char)
  }
  setPassword(pass)

 },[length,numberAllowed,specialCharAllowed,setPassword]) 
return (
  <>
    <div className="w-full max-w-md mx-auto bg-gray-800 text-white p-4 rounded-lg">
      <h1 className="text-center text-xl font-bold mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 text-center bg-gray-700 text-lg font-bold"
        />

        <button
          className="outline-none bg-blue-600 text-white px-3 py-0.5"
        >
          Copy
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type = "checkbox"
        defaultChecked={numberAllowed}
        id = "numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=> !prev);

        }}
        
        >
        
        </input>
      </div>
    </div>
  </>
);
}


export default App
