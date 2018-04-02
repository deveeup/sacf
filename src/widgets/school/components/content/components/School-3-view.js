
import React from 'react'
import './School-3.styl'

const Parse = require('html-react-parser')

function SchoolView3 (props) {
  const title = props.InfoProgram.title
  const item = props.InfoProgram.item
  const text = props.InfoProgram.text
  const Visible = { display: 'bolck', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="School-3" style={ContentView}>
      <h2 className="Title">{Parse(title)}</h2>
      <div className="ItemsContainer">
        {
          item.map((item)=> {
            return(
              <div className="ItemContainer" key={item.id}>
                <figure className="ImageContainer">
                    <img src={item.image} />
                </figure>
                <div className="TextContainer">
                  <p className="Text">{Parse(item.text)}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <p className="TextFooter">{Parse(text)}</p>
    </div>
  )
}

export default SchoolView3