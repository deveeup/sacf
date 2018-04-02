
import React from 'react'
import './BdB-5.styl'
const Parser = require('html-react-parser')

function BdB5View(props){
  const item = props.Info.item
  const Visible = { display: 'block', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="BdB-5" style={ContentView}>
      <div className="TopContent">
        <figure className="TopContentLeft">
          <img src={props.Info.image}/>
        </figure>
        <div className="TopContentRight">
          <h2>{props.Info.title}</h2>
          <p>{props.Info.text}</p>
        </div>
      </div>
      <div className="BottomContent">
        {
          item.map((item) => {
            return (
              <div className="ItemContainer" key={item.id}>
                <div className="ItemTopContainer">
                  <figure>
                    <img src={item.image} />
                  </figure>
                </div>
                <div className="ItemContent">
                  <h3>{item.title} </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BdB5View