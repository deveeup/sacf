
import React from 'react'
import './court.styl'
import Content from './content'
const Parse = require('html-react-parser')

function CourtView (props) {
  const FontBold = {fontWeight: 'bold'}
  const image = props.CourtEdifice
  const menu = props.ListItems.item
  const title = props.ListItems.title
  return(
    <div className="CourtContainer">
      <img className="CourtEdifice" src={image} /> 
      <div className="InfoContainer">
        <div className="Menu">
          <h2 className="Title">{Parse(title)}</h2>
          <nav className="NavCourt">
            <ul className="UlCourt">
              {
                menu.map((item) => {
                  return item.id == props.ContentCourt ?
                    <li className="ItemCourt" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuCourt}
                        style={FontBold}
                      >
                        {item.letter} {Parse(item.title)}
                      </a>
                    </li>
                    :
                    <li className="ItemCourt" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuCourt}
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
          <Content ContentCourt={props.ContentCourt}/>
        </div>
      </div>
    </div>
  )
}

export default CourtView