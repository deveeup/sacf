
import React from 'react'
import './School-1.styl'
import Img from '../containers/assets/image-1.png'

const Parse = require('html-react-parser')

function SchoolView1 (props) {
  console.log(props.InfoItems.item)
  const item = props.InfoItems.item
  const callback = props.InfoItems.callback
  return(
    <div className="School-1">
      <div className="ItemsContainer">
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