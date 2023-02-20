
import {useEffect} from 'react'
import mole from './assets/mole.png'

function Mole(props) {
  useEffect(()=>{
    const randomTime=Math.ceil(Math.random()*5000);
    const timer = setTimeout(()=>{
      props.toggle(false)
    }, randomTime)
    return()=>clearTimeout(timer)
   })
   return(
    <div>
       <img style={{'width': '30vw'}}
       src={mole}
       onClick={props.molebopped}/>
    </div>
   )
  }

export default Mole;