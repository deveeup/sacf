
import React from 'react'
import './prison.styl'
const Parse = require('html-react-parser')

function PrisonView (props){
	console.log(props.ListItems)
	const image = props.PrisonEdifice
	const menu = props.ListItems.list
  const FontBold = {fontWeight: 'bold'}

  return(
    <div className="PrisonContainer">
    	<img src={image} className="PrisonEdifice" />
    	<div className="InfoContainer">
        <div className="Menu">
          <nav className="NavPrison">
            <ul className="UlPrison">
              {
                menu.map((item) => {
                  return item.id == props.ContentPrison ?
                    <li className="ItemPrison" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuPrison}
                        style={FontBold}
                      >
                        {item.letter} {Parse(item.title)}
                      </a>
                    </li>
                    :
                    <li className="ItemPrison" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuPrison}
                      >
                        {item.letter} {Parse(item.title)}
                      </a>
                    </li>
                })
              }
            </ul>
          </nav>
        </div>
        <div className="Content">
          {/*<Content ContentPrison={props.ContentPrison}/>*/}
        </div>
      </div>
    </div>
  )
}

export default PrisonView