
import React from 'react'
import './BdB-2.styl'
const Parser = require('html-react-parser')

function BdB2View(props){
  const item = props.Info.item
  console.log(props.Info)
  return(
    <div className="BdB-2">
      <h2>{props.Info.title}</h2>
      <div className="BdB-2-Content">
        {
          item.map((item) => {
            return(
              <div className="ItemContainer" key={item.id}>
                <div className="Left">
                  <figure>
                    <img src={item.image} />
                  </figure>
                </div>
                <div className="Right">
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      {/*
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
                <p key={item.id}>
                  {item.text}
                </p>
              )
            })
          }
        </div>
      */}
    </div>
  )
}

export default BdB2View