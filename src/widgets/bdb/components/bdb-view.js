
import React from 'react'
import './bdb.styl'
import BdbEdifice from './assets/BdbEdifice.png'
import ContainerContent from './content'

function BdbView (props) {
  const menu = props.ListItems.list
  return(
    <div className="BdbContainer">
       <img className="BdbEdifice" src={BdbEdifice} id="BdB-Img"/>
       <div className="InfoContainer">
        <div className="Menu">
          <nav className="NavBdB">
            <ul className="UlBdB">
              {
                menu.map((item) => {
                  return(
                    <li className="ItemBdB" key={item.id}>
                      <a href="#" id={item.id} onClick={props.ClickMenu}>
                        {item.title}
                      </a>
                    </li>
                  )
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