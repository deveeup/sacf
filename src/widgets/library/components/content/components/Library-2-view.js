
import React from 'react'
import './Library-2.styl'

const Parse = require('html-react-parser')

function LibraryView2 (props) {
  const title = props.Info.title
  const item = props.Info.item
  return(
    <div className="Library-2">
      <h2 className="Title">
        {title}
      </h2>
      <div className="ItemContainer">
        {
          item.map((item) => {
            return(
              <div className="Item">
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

export default LibraryView2