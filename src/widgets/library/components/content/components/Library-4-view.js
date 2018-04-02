
import React from 'react'
import './Library-4.styl'

const Parse = require('html-react-parser')

function LibraryView4 (props) {
  const image = props.Info.image
  const subtitle = props.Info.subtitle
  const textOne = props.Info.textOne
  const textTwo = props.Info.textTwo
  const title = props.Info.title
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Library-4" style={ContentView}>
      <div className="Left">
        <h2 className="Title">{title}</h2>
        <p className="Text">{Parse(textOne)}</p>
        <h3 className="Subtitle">{subtitle}</h3>
        <p className="Text">{Parse(textTwo)}</p>
      </div>
      <figure className="Right">
        <img src={image}/>
      </figure>
    </div>
  )
}

export default LibraryView4