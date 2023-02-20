import {useEffect} from 'react'
import molehill from './assets/molehill.png'

function EmptySlot(props) {
 useEffect(()=>{
  const randomTime=Math.ceil(Math.random()*5000);
  const timer = setTimeout(()=>{
    props.toggle(true)
  }, randomTime)
  return()=>clearTimeout(timer)
 })
 return(
  <div>
     <img style={{'width': '30vw'}}
     src={molehill}
     onClick={props.handleCLick}/>
  </div>
 )
}
 export default EmptySlot;
