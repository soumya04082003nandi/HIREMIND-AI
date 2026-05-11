import { useEffect } from 'react'
import { useRef } from 'react'

const ParticalBg = () => {
    const canvasRef= useRef(null)

    useEffect(()=>{
        const canvas=canvasRef.current;
        const ctx=canvas.getContext("2D");


        let particals=[]
        const particalCount=50;
        const color=["rgba(255,255,255,0.7)"];
        
    })

  return (

 <canvas className='fixed top-0 left-0 w-full h-full pointer-events-none z-0'>
    ref={canvasRef}
 </canvas>
  )
}

export default ParticalBg
