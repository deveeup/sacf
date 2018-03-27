
import React from 'react'
import './BdB-1.styl'
const Parser = require('html-react-parser')

function BdB1View(props){
  return(
    <div className="BdB-1">
      <div className="Left">
        <h2>
          { Parser(props.Info.title) }
        </h2>
        <p>
          { Parser(props.Info.content) }
        </p>
      </div>
      <figure className="Right">
        <img src={props.Info.image}/>
      </figure>
    </div>
  )
}

export default BdB1View