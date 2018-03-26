
import React from 'react'
import './School-3.styl'

const Parse = require('html-react-parser')

function SchoolView3 (props) {

  console.log(props.InfoProgram)
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
              <div className="ItemContainer">
                <figure className="ImageContainer">
                    <img src={item.image} />
                </figure>
                <h3 className="Title">{Parse(item.text)}</h3>
              </div>
            )
          })
        }
      </div>
      <p>{Parse(text)}</p>
    </div>
  )
}

export default SchoolView3