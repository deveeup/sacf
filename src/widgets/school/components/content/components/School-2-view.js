
import React from 'react'
import './School-2.styl'

const Parse = require('html-react-parser')

function SchoolView2 (props) {

  const callback = props.InfoTools.callback
  const item = props.InfoTools.item
  const title = props.InfoTools.title
  return(
    <div className="School-2">
      <h2 className="Title">{Parse(title)}</h2>
      <div className="ItemsContainer">
        {
          item.map((item)=> {
            return(
              <div className="ItemContainer" key={item.id}>
                <figure className="ImageContainer">
                  <img src={item.image} />
                </figure>
                <h3 className="Title">{Parse(item.title)}</h3>
              </div>
            )
          })
        }
        <div className="Callback">
          <p className="Text">{callback.title}</p>
          <a className="Button" href={callback.url} target="_blank">{callback.button}</a>
        </div>
      </div>
    </div>
  )
}

export default SchoolView2