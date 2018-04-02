
import React from 'react'
import './BdB-3.styl'
const Parse = require('html-react-parser')

function BdB3View(props){
  const item = props.Info.item
  const Visible = { display: 'block', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="BdB-3" style={ContentView}>
      <div className="TopContent">
        <div className="TopContentLeft">
          <h2>{Parse(props.Info.title)}</h2>
          <p>{Parse(props.Info.text)}</p>
        </div>
        <figure className="TopContentRight">
          <img src={props.Info.image} />
        </figure>
      </div>
      <div className="BottomContent">
        {
          item.map((item) => {
            return(
              <div className="ItemContainer" key={item.id}>
                <div className="TitleContainer">
                  <figure className="IconBefore">
                    <img src={item.image} />
                  </figure>
                  <h3 className="ItemTitle">{Parse(item.title)}</h3>
                </div>
                <p className="ItemText">{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BdB3View