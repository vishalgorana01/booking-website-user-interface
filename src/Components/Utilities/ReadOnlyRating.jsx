import React from 'react'
import { Rating } from '@material-tailwind/react'
import '../../Assets/CSS/Global.css'

function ReadOnlyRating({rate, gap}) {
  return (
    <Rating className={`readonlyrating flex items-center ${gap == undefined ? 'gap-x-1' : `gap-x-${gap}`}  text-yellow-500 justify-center text-xs`} value={rate} readonly />
  )
}

export default ReadOnlyRating