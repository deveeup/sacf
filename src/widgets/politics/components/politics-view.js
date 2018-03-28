
import React from 'react'
import './politics.styl'
import Content from './content'

function PoliticsView (props){
  const menu = props.ListItems.list
  const title = props.ListItems.title
  const FontBold = {fontWeight: 'bold'}
  return(
    <div className="PoliticsContainer">
      <img className="PoliticsEdifice" src={props.PoliticsEdifice}/>
      <div className="InfoContainer">
        <div className="Menu">
          <h2 className="Title">{title}</h2>
          <nav className="NavPolitics">
            <ul className="UlPolitics">
            {
              menu.map((item) => {
                return item.id == props.ContentPolitics ?
                  <li className="ItemPolitics" key={item.id}>
                    <a
                      href="#" 
                      id={item.id}
                      onClick={props.ClickMenuPolitics}
                      style={FontBold}
                    >
                      {item.letter}. {item.title}
                    </a>
                  </li>
                  :
                  <li className="ItemPolitics" key={item.id}>
                    <a
                      id={item.id}
                      href="#" 
                      onClick={props.ClickMenuPolitics}
                    >
                      {item.letter}. {item.title}
                    </a>
                  </li>
              })
            }
            </ul>
          </nav>
        </div>
        <div className="Content">
          <Content ContentPolitics={props.ContentPolitics}/>
        </div>
      </div>
    </div>
  )
}

export default PoliticsView