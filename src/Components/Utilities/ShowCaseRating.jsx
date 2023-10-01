import React from 'react'
import ReadOnlyRating from './ReadOnlyRating'
import RatingBar from './RatingBar'

function ShowCaseRating() {
  const Ratings = [
    {
      rate: '5',
      color: '#22c55e',
      progress: 114,
    },
    {
      rate: '4',
      color: '#7dce51',
      progress: 100,
    },
    {
      rate: '3',
      color: '#c0ea00',
      progress: 50,
    },
    {
      rate: '2',
      color: '#fed23b',
      progress: 32,
    },
    {
      rate: '1',
      color: '#eb4200',
      progress: 12,
    }
  ]

  const progressRating = Ratings.map((ele, index)=>{
    return (
      <RatingBar key={index} clr={ele.color} progress={ele.progress} rate={ele.rate} />
    )
  })

  return (
    <span className='flex flex-col gap-y-10 items-start justify-center w-full sm:flex-row sm:items-center'>
      <span className='flex flex-col items-start justify-center gap-y-2.5 w-full px-8 sm:items-center'>
        <span className='text-6xl font-thin sm:text-center'>4.5/5</span>
        <span className='flex text-md items-center justify-center'>
          <ReadOnlyRating rate={Number.parseInt(4.5)} />
        </span>
      </span>

      <span className='flex flex-col gap-y-2.5 items-center justify-center w-80 px-6 sm:w-full'>
        {progressRating}
      </span>
    </span>
  )
}

export default ShowCaseRating