
import React from 'react'
import './BdB-2.styl'
const Parser = require('html-react-parser')


function BdB1View(props){
  return(
    <div className="BdB-1">
      {props.TextContent.title}
    </div>
  )
}

export default BdB1View