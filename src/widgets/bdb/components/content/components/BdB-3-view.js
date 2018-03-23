
import React from 'react'
import './BdB-3.styl'
const Parser = require('html-react-parser')

function BdB3View(props){
  const Items = props.TextContent.items
  return(
    <div className="BdB-3">
      <div className="TopContent">
        <div className="TopContentLeft">
          <h2>{props.TextContent.title}</h2>
          <p>{Parser(props.TextContent.textcontent)}</p>
        </div>
        <figure className="TopContentRight">
          <img src={props.IconActors} />
        </figure>
      </div>
      <div className="BottomContent">
        {
          Items.map((item) => {
            return(
              <div className="ItemContainer" key={item.id}>
                <div className="TitleContainer">
                  <figure className="IconBefore">
                    <img src={props.IconBefore} />
                  </figure>
                  <h3 className="ItemTitle">{item.title}</h3>
                </div>
                <p className="ItemText">{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BdB3View