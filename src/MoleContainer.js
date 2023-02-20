import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
  let[displayMole,setDisplayMole]=useState(false)
  const molebopped=(e)=>{
    props.setScore(props.score+1)
    setDisplayMole(false)
  }
  let moleDisplay=displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleCLick={molebopped}/>:<EmptySlot toggle={setDisplayMole}/>
  return (
    <div style={{'display':'incline-block','width': '30vw'}}>
      {moleDisplay}
      </div>
  )
}

export default MoleContainer;


