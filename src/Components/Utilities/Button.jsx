import React from 'react'

function Button({labelName}) {
  return (
    <button className='py-0.5 text-md px-5 rounded-sm bg-green-500 text-white cursor-pointer hover:bg-green-400'>{labelName}</button>
  )
}

export default Button