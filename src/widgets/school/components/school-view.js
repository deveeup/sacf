
import React from 'react'
import './school.styl'
import ContainerContent from './content'

function SchoolView(props){
  const menu = props.ListItems.list
  return(
    <div className="SchoolContainer">
      <img className="SchoolEdifice" src={props.SchoolEdifice} id="ModalImage"/>
      <div className="InfoContainer">
        <div className="Menu">
          <nav className="NavSchool">
            <ul className="UlSchool">
            {
              menu.map((item) => {
                return (
                  <li className="ItemSchool" key={item.id}>
                    <a 
                      id={item.id}
                      href="#"
                      onClick={props.ClickMenuSchool}
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </nav>
        </div>
        <div>
          asd
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