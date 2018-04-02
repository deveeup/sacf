
import React from 'react'
import './Prison-1.styl'

const Parse = require('html-react-parser')

function PrisonView1 (props) {
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Prison-1" style={ContentView}>
      <figure className="Image">
        <img src={props.Info.image} />
      </figure>
      <h2 className="Title">{props.Info.title}</h2>
      <p className="Text">{props.Info.text}</p>
    </div>
  )
}

export default PrisonView1
