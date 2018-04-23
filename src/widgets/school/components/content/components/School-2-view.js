
import React from 'react'
import './School-2.styl'

const Parse = require('html-react-parser')

function SchoolView2 (props) {

  const callback = props.InfoTools.callback
  const item = props.InfoTools.item
  const title = props.InfoTools.title
  const Visible = { display: 'block', opacity: 1 }
  const Hidden = { display: 'none', opacity: 0 }
  let ContentView = Visible
  { props.ModalActive
    ? ContentView = Visible 
    : ContentView = Hidden 
  }
  return(
    <div className="School-2" style={ContentView}>
      <h2 className="Title">{Parse(title)}</h2>
      <div className="ItemsContainer">
        {
          item.map((item)=> {
            return(
              <div className="ItemContainer" key={item.id}>
                {
                  item.link ?
                    <a href={item.link} target="_blank">
                      <figure className="ImageContainer">
                        <img src={item.image}/>
                      </figure>
                      <h3 className="Title">{Parse(item.title)}</h3>
                    </a>
                  :
                    <div className="noPointer">
                      <figure className="ImageContainer">
                        <img src={item.image} />
                      </figure>
                      <h3 className="Title">{Parse(item.title)}</h3>
                    </div>
                }

              </div>
            )
          })
        }
        <div className="Callback">
          <p className="Text">{callback.title}</p>
          <a className="Button" href={callback.url} target="_blank">{callback.button}</a>
        </div>
      </div>
    </div>
  )
}

export default SchoolView2