
import React from 'react'

function ContentBdB(props){
  switch(props.ContentBdB){
    case 'BdB-1':
      return(
        <p>CASO1</p>
      )
    break
    case 'BdB-2':
      return(
        <p>Renderrrrr!</p>
      )
    case 'BdB-3':
      return(
        <p>CASO3</p>
      )
    break
    case 'BdB-4':
      return(
        <p>CASO4</p>
      )
    break
    case 'BdB-5':
      return(
        <p>CASO5</p>
      )
    break
  }
}

export default ContentBdB