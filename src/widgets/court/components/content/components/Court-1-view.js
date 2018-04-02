
import React from 'react'
import './Court-1.styl'

const Parse = require('html-react-parser')

function CourtView1 (props) {
  const item = props.Info
  const Visible = { display: 'flex', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="Court-1" style={ContentView}>
      <h2 className="Title">{item.title}</h2>
      <div className="InfoContainer">
        <div className="Top">
          <figure className="Image">
            <img src={item.principalDefenderImg} />
            <h3 className="TitleDark">Defensor principal:</h3>
            <p className="Name">{item.principalDefenderName}</p>
          </figure>
          <figure className="Image">
            <img src={item.supportDefenderImg} />
            <h3 className="TitleLight">Defensor suplente:</h3>
            <p className="Name">{item.supportDefenderName}</p>
          </figure>
        </div>
        <div className="Bottom">
          <ol className="OrderList">
            <li>
              <img src={item.icon} />
              <span>Dirección:</span>
              <p>{item.address}</p>
            </li>
            <li>
              <img src={item.icon} />
              <span>PBX:</span>
              <p>{item.pbx}</p>
            </li>
            <li>
              <img src={item.icon} />
              <span>Fax:</span>
              <p>{item.fax}</p>
            </li>
            <li>
              <div className="LastChild">
                <img src={item.icon} />
                <span>Correo Electrónico:</span>
              </div>
              <p>{item.mail}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default CourtView1
