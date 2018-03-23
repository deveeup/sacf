
import React from 'react'
import './BdB-5.styl'
const Parser = require('html-react-parser')

function BdB5View(props){
  const Items = props.TextContent.items
  return(
    <div className="BdB-5">
      <div className="TopContent">
        <figure className="TopContentLeft">
          <img src={props.LogoSacf}/>
        </figure>
        <div className="TopContentRight">
          <h2>{props.TextContent.title}</h2>
          <p>{props.TextContent.textcontent}</p>
        </div>
      </div>
      <div className="BottomContent">
        {
          Items.map((item) => {
            return (
              <div className="ItemContainer" key={item.id}>
                <div className="ItemTopContainer">
                  <figure>
                    <img src={item.image} />
                  </figure>
                </div>
                <div className="ItemContent">
                  <h3>Title </h3>
                  <p>Text</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BdB5View