
import React from 'react'
import './BdB-1.styl'
const Parser = require('html-react-parser')

function BdB1View(props){
  const Visible = { visibility: 'visible', opacity: 1 }
  const Hidden = { visibility: 'hidden', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="BdB-1" style={ContentView}>
      <div className="Left">
        <h2>
          { Parser(props.Info.title) }
        </h2>
        <p>
          { Parser(props.Info.content) }
        </p>
      </div>
      <figure className="Right">
        <img src={props.Info.image}/>
      </figure>
    </div>
  )
}

export default BdB1View