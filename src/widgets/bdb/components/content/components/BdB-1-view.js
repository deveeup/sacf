
import React from 'react'
import './BdB-1.styl'
const Parser = require('html-react-parser')

function BdB1View(props){
  return(
    <div className="BdB-1">
      <div className="Left">
        <h2>
          { Parser(props.TextContent.title) }
        </h2>
        <p>
          { Parser(props.TextContent.content) }
        </p>
      </div>
      <figure className="Right">
        <img src={props.Image}/>
      </figure>
    </div>
  )
}

export default BdB1View