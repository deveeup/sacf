
import React from 'react'
import './BdB-4.styl'
const Parser = require('html-react-parser')

function BdB4View(props){
  const item = props.Info.item
  return(
    <div className="BdB-4">
      <h2 className="Title">{props.Info.title}</h2>
      <div className="InfoContainer">
        <div className="ItemsContainer">
          {
            item.map((item) => {
              return(
                <div className="ItemContainer" key={item.id}>
                  <figure className="ImageContainer">
                    <img src={item.image}/>
                  </figure>
                  <div className="Info">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BdB4View