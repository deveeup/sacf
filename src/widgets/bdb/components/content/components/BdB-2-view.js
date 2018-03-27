
import React from 'react'
import './BdB-2.styl'
const Parser = require('html-react-parser')

function BdB2View(props){
  const item = props.Info.item
  return(
    <div className="BdB-2">
      <h2>{props.Info.title}</h2>
      <div className="BdB-2-Content">
        {
          item.map((item) => {
            return(
              <div className="ItemContainer" key={item.id}>
                <div className="Left">
                  <figure>
                    <img src={item.image} />
                  </figure>
                </div>
                <div className="Right">
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

export default BdB2View