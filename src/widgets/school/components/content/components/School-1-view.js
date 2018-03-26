
import React from 'react'
import './School-1.styl'
import Img from '../containers/assets/image-1.png'

function SchoolView1 (props) {
  console.log(props.InfoItems.item)
  const item = props.InfoItems.item
  return(
    <div className="School-1">
      <div className="ItemsContainer">
        {
          item.map((item) => {
            return(
              <div key={item.id}>
                {item.image}
                <img src={item.image} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SchoolView1