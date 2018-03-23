
import React from 'react'
import './BdB-2.styl'
const Parser = require('html-react-parser')

function BdB2View(props){
  const text = props.TextContent.texts
  return(
    <div className="BdB-2">
      <h2>{props.TextContent.title}</h2>
      <div className="BdB-2-Content">
        <div className="Left">
          <figure>
            <img src={props.LogoConsolidate} />
          </figure>
          <figure>
            <img src={props.LogoInfo} />
          </figure>
          <figure>
            <img src={props.LogoProcess} />
          </figure>
          <figure>
            <img src={props.LogoProtection} />
          </figure>
          <figure>
            <img src={props.LogoWarranty} />
          </figure>
        </div>
        <div className="Right">
          {
            text.map((item) => {
              return(
                <p>
                  {item.text}
                </p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BdB2View