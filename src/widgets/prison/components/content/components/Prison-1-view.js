
import React from 'react'
import './Prison-1.styl'

const Parse = require('html-react-parser')

function PrisonView1 (props) {
  return(
    <div className="Prison-1">
      <figure className="Image">
        <img src={props.Info.image} />
      </figure>
      <h2 className="Title">{props.Info.title}</h2>
      <p className="Text">{props.Info.text}</p>
    </div>
  )
}

export default PrisonView1
