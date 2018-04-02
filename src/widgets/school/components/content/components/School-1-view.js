
import React from 'react'
import './School-1.styl'

const Parse = require('html-react-parser')

function SchoolView1 (props) {
  const item = props.InfoConcepts.item
  const callback = props.InfoConcepts.callback
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="School-1">
      <div className="ItemsContainer" style={ContentView}>
        {
          item.map((item) => {
            return(
              <div className="ItemContainer" key={item.id}>
                <figure className="ImageContainer">
                  <img src={item.image} />
                </figure>
                <h3 className="Title">{ Parse(item.title) }</h3>
              </div>
            )
          })
        }
      </div>
      <div className="Callback">
        <p className="Text">{callback.text}</p>
        <a className="Button" href={callback.url} target="_blank">{callback.button}</a>
      </div>
    </div>
  )
}

export default SchoolView1