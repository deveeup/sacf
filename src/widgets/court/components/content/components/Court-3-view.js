
import React from 'react'
import './Court-3.styl'

const Parse = require('html-react-parser')

function CourtView3 (props) {
  console.log(props.Info)
  const title = props.Info.title
  const text = props.Info.text
  const image = props.Info.image
  return(
    <div className="Court-3">
      <div className="Left">
        <h2 className="Title">{title}</h2>
        <p className="Text">{Parse(text)}</p>
      </div>
      <figure className="Right">
        <img src={image}/>
      </figure>
    </div>
  )
}

export default CourtView3
