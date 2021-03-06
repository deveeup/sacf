
import React from 'react'
import './library.styl'
import Content from './content'
const Parse = require('html-react-parser')

function LibraryView (props) {
  const FontBold = {fontWeight: 'bold'}
  const menu = props.ListItems.list
  const title = props.ListItems.title
  const image = props.LibraryEdifice
  return(
    <div className="LibraryContainer">
      <img className="LibraryEdifice" src={image} /> 
      <div className="InfoContainer">
        <div className="Menu">
          <nav className="NavLibrary">
            <ul className="UlLibrary">
              {
                menu.map((item) => {
                  return item.id == props.ContentLibrary ?
                    <li className="ItemLibrary" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuLibrary}
                        style={FontBold}
                      >
                        {item.letter} {Parse(item.title)}
                      </a>
                    </li>
                    :
                    <li className="ItemLibrary" key={item.id}>
                      <a 
                        href="#"
                        id={item.id}
                        onClick={props.ClickMenuLibrary}
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
          <Content 
            ContentLibrary={props.ContentLibrary}
            ModalActive={props.ModalActive}
          />
        </div>
      </div>
    </div>
  )
}

export default LibraryView