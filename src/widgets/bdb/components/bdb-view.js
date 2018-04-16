
import React from 'react'
import './bdb.styl'
import ContainerContent from './content'
const Path = require('html-react-parser')

function BdbView (props) {
  const menu = props.ListItems.list
  const FontBold = {fontWeight: 'bold'}

  return(
    <div className="BdbContainer">
      <img className="BdbEdifice" src="./src/widgets/bdb/containers/assets/BdbEdifice.png" id="ModalImage"/>
      <div className="InfoContainer">
        <div className="Menu">
          <nav className="NavBdB">
            <ul className="UlBdB">
              {
                menu.map((item) => {
                  return item.id == props.ContentBdB ?
                    <li className="ItemBdB" key={item.id}>
                      <a 
                        id={item.id} 
                        href="#"
                        onClick={props.ClickMenuBdB}
                        style={FontBold}
                      >
                        {Path(item.title)}
                      </a>
                    </li>
                    :
                    <li className="ItemBdB" key={item.id}>
                      <a 
                      id={item.id} 
                      href="#"
                      onClick={props.ClickMenuBdB}
                      >
                        {Path(item.title)}
                      </a>
                    </li>
                })
              }
            </ul>
          </nav>
        </div>
        <div className="Content">
          <ContainerContent
            ContentBdB={props.ContentBdB}
            ModalActive={props.ModalActive}
          />
        </div>
       </div>
    </div>
  )
}
export default BdbView