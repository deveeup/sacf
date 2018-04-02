
import React from 'react'
import './Library-5.styl'

const Parse = require('html-react-parser')

function LibraryView5 (props) {
  const item = props.Info.item
  const title = props.Info.title
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Library-5" style={ContentView}>
      <h2 className="Title">{title}</h2>
      <div className="ItemContainer">
        {
          item.map((item) => {
            return(
              <div className="Item" key={item.id}>
                <div className="Left">
                  <img src={item.image} />
                </div>
                <div className="Right">
                  <p className="Text">{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LibraryView5