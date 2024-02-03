import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='h-screen w-full duration-200 flex justify-center items-center' style={{backgroundColor: color}}>
     
      <div className='flex fixed bottom-12 shadow-md justify-center items-center gap-5 py-8 px-10 rounded-full'>
          <button onClick={() => { setColor("white")}} className='btn bg-white text-black rounded-full px-3 py-1'>White</button>
          <button onClick={() => { setColor("black")}} className='btn bg-black text-white rounded-full px-3 py-1'>Black</button>
          <button onClick={() => { setColor("blue")}} className='btn bg-blue-400 text-black rounded-full px-3 py-1'>Blue</button>
          <button onClick={() => { setColor("green")}} className='btn bg-green-400 text-black rounded-full px-3 py-1'>Green</button>
          <button onClick={() => { setColor("yellow")}} className='btn bg-yellow-400 text-black rounded-full px-3 py-1'>Yellow</button>
      </div>
      </div>

    </>
  )
}

export default App
