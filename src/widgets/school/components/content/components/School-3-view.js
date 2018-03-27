
import React from 'react'
import './School-3.styl'

const Parse = require('html-react-parser')

function SchoolView3 (props) {
  const title = props.InfoProgram.title
  const item = props.InfoProgram.item
  const text = props.InfoProgram.text
  return(
    <div className="School-3">
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