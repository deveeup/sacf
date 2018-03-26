
import React from 'react'
import './bdb.styl'
import BdbEdifice from './assets/BdbEdifice.png'
import ContainerContent from './content'

function BdbView (props) {
  const menu = props.ListItems.list
  const FontBold = {fontWeight: 'bold'}
  return(
    <div className="BdbContainer">
      <img className="BdbEdifice" src={BdbEdifice} id="ModalImage"/>
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
                        {item.title}
                      </a>
                    </li>
                    :
                    <li className="ItemBdB" key={item.id}>
                      <a 
                      id={item.id} 
                      href="#"
                      onClick={props.ClickMenuBdB}
                      >
                        {item.title}
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
          />
        </div>
       </div>
    </div>
  )
}

export default BdbView