import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor: color}}></div>
     
      <div className='flex fixed bottom-12 shadow-md justify-center items-center gap-5 py-8 px-10'>
          <button onClick={() => { setColor("white")}} className='btn bg-white text-black rounded-full'>White</button>
          <button onClick={() => { setColor("black")}} className='btn bg-black text-white rounded-full'>Black</button>
          <button onClick={() => { setColor("blue")}} className='btn bg-blue-400 text-black rounded-full'>Blue</button>
          <button onClick={() => { setColor("green")}} className='btn bg-green-400 text-black rounded-full'>Green</button>
          <button onClick={() => { setColor("yellow")}} className='btn bg-yellow-400 text-black rounded-full'>Yellow</button>
      </div>

    </>
  )
}

export default App
