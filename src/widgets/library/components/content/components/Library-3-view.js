
import React from 'react'
import './Library-3.styl'

const Parse = require('html-react-parser')

function LibraryView3 (props) {
  const title = props.Info.title
  const text = props.Info.text
  const item = props.Info.item
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Library-3" style={ContentView}>
      <h2 className="Title">
        {title}
      </h2>
      <p className="Text">{text}</p>
      <div className="ItemContainer">
        {
          item.map((item) => {
            return(
              <div className="Item" key={item.id}>
                <figure className="ImageContainer">
                  <img src={item.image}/>
                </figure>
                <p className="Text">
                  {item.text}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LibraryView3