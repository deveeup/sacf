
import React from 'react'
import './Library-2.styl'

const Parse = require('html-react-parser')

function LibraryView2 (props) {
  // const title = props.Info.title
  // const text = props.Info.text
  // const image = props.Info.image
  // const subtitle = props.Info.subtitle
  // const item = props.Info.item
  return(
    <div className="Library-2">
      {props.Info.hi}
    </div>
  )
}

export default LibraryView2