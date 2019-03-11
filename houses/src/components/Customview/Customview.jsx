import React from 'react'

const Customview = ({getCustomId}) => {
  return (
    <div>
      <button data-id="1" onClick={getCustomId}>Custom 1</button>
      <button data-id="2" onClick={getCustomId}>Custom 2</button>
      <button data-id="3" onClick={getCustomId}>Custom 3</button>
    </div>
  )
}

export default Customview
