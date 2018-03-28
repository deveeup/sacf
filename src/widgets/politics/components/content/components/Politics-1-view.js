
import React from 'react'
import './Politics-1.styl'

const Parse = require('html-react-parser')

function PoliticsView1 (props) {
  // const item = props.InfoConcepts.item
  // const callback = props.InfoConcepts.callback
  return(
    <div className="Politics-1">
      Funciona?
      {/*<div className="ItemsContainer">
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
      </div>*/}
    </div>
  )
}

export default PoliticsView1