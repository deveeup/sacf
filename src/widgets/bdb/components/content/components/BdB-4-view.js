
import React from 'react'
import './BdB-4.styl'
const Parser = require('html-react-parser')

function BdB4View(props){
  const Items = props.TextContent.items
  return(
    <div className="BdB-4">
      <h2>{props.TextContent.title}</h2>
      <div className="InfoContainer">
        <div className="ImageContainer">
          <figure>
            <img src={props.LogoPolitics} />
          </figure>
          <figure>
            <img src={props.LogoMethods} />
          </figure>
          <figure>
            <img src={props.LogoDocument} />
          </figure>
          <figure>
            <img src={props.LogoStructure} />
          </figure>
          <figure>
            <img src={props.LogoTraining} />
          </figure>
          <figure>
            <img src={props.LogoSaveMoney} />
          </figure>
          <figure>
            <img src={props.LogoCash} />
          </figure>
        </div>
        <div className="ItemsContainer">
          {
            Items.map((item) => {
              return(
                <div className="ItemContainer" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BdB4View