
import React from 'react'
import './Court-2.styl'

const Parse = require('html-react-parser')

function CourtView2 (props) {
  const afterText = props.Info.afterItem
  const icon = props.Info.icon
  const image = props.Info.image
  const item = props.Info.item
  const title = props.Info.title
  const titleTwo = props.Info.titleTwo
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Court-2" style={ContentView}>
      <div className="Left">
        <h2 className="Title">{title}</h2>
        <ol className="OrderList"> 
        {
          item.map((item) => {
            return(
              <li className="Item" key={item.id}>
                <img src={icon} />
                <p>{item.text}</p>
              </li>
            )
          })
        }
        </ol>
        <h3 className="TitleYellow">{titleTwo}</h3>
        <ol className="OrderList">
          <li className="Item">
            <img src={icon} />
            <p>{afterText}</p>
          </li>
        </ol>
      </div>
      <figure className="Right">
        <img src={image} />
      </figure>
    </div>
  )
}

export default CourtView2
