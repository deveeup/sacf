
import React from 'react'
import './Library-1.styl'

const Parse = require('html-react-parser')

function LibraryView1 (props) {
  const title = props.Info.title
  const text = props.Info.text
  const image = props.Info.image
  const subtitle = props.Info.subtitle
  const item = props.Info.item
  return(
    <div className="Library-1">
      <div className="Top">
        <div className="Left">
          <h2 className="Title">{Parse(title)}</h2>
          <p className="Text">{text}</p>
        </div>
        <figure className="Right">
          <img src={image} />
        </figure>
      </div>
      <div className="Bottom">
        <span className="Subtitle">{subtitle}</span>
        <ol className="OrderList">
          {
            item.map((item) => {
              return(
                <li key={item.id}>
                  <img src={item.icon} />  
                  <p>{item.title}</p>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default LibraryView1
