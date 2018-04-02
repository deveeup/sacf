
import React from 'react'
import './Politics-3.styl'

const Parse = require('html-react-parser')

function PoliticsView3 (props) {
  const id = props.Info.id
  const image = props.Info.image
  const text = props.Info.text
  const title = props.Info.title
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Politics-3" style={ContentView}>
      <div className="Left">
        <div className="TitleContainer">
          <h2 className="Letter">{id}.</h2>
          <h3 className="Title">{Parse(title)}</h3>
        </div>
        <p className="Text">{Parse(text)}</p>
      </div>
      <figure className="Right">
        <img src={image} alt={title}/>
      </figure>
    </div>
  )
}

export default PoliticsView3
