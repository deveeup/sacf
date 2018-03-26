
import React from 'react'
import './school.styl'
import ContainerContent from './content'

function SchoolView(props){
  const menu = props.ListItems.list
  const FontBold = {fontWeight: 'bold'}
  return(
    <div className="SchoolContainer">
      <img className="SchoolEdifice" src={props.SchoolEdifice} id="ModalImage"/>
      <div className="InfoContainer">
        <div className="Menu">
          <nav className="NavSchool">
            <ul className="UlSchool">
            {
              menu.map((item) => {
                return item.id == props.ContentSchool ?
                  <li className="ItemSchool" key={item.id}>
                    <a 
                      id={item.id}
                      href="#"
                      onClick={props.ClickMenuSchool}
                      style={FontBold}
                    >
                      {item.title}
                    </a>
                  </li>
                  :
                  <li className="ItemSchool" key={item.id}>
                    <a 
                      id={item.id}
                      href="#"
                      onClick={props.ClickMenuSchool}
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
            ContentSchool={props.ContentSchool}
          />
        </div>
      </div>
    </div>
  )
}

export default SchoolView