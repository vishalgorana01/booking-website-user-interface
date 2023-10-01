import React from 'react'
import ReadOnlyRating from './ReadOnlyRating'

// images
import turkey from '../../Assets/Images/France.jpg'

export default function Reviews({ reviewsData }) {
    const data = [
        {
            title: 'Economical and safe travel with best Amenities',
            reviewDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora illum cumque nostrum distinctio omnis consequuntur suscipit in dicta deserunt cupiditate quaerat, porro repudiandae ex itaque, necessitatibus, eveniet vitae ipsa? Dolorem error saepe reiciendis consequatur, quaerat mollitia. Temporibus, perspiciatis repellat!',
            rate: 4.5,
            name: 'Linda Karen',
            pos: 'Travel Agent',
            profileImage: null
        },

        {
            title: 'Best travel without Hassels ',
            reviewDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora illum cumque nostrum distinctio omnis consequuntur suscipit in dicta deserunt cupiditate quaerat, porro repudiandae ex itaque, necessitatibus, eveniet vitae ipsa? Dolorem error saepe reiciendis consequatur, quaerat mollitia. Temporibus, perspiciatis repellat!',
            rate: 3.5,
            name: 'Linda Karen',
            pos: 'Travel journo',
            profileImage: null
        },

        {
            title: 'Economical and safe travel with best Amenities',
            reviewDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempora illum cumque nostrum distinctio omnis consequuntur suscipit in dicta deserunt cupiditate quaerat, porro repudiandae ex itaque, necessitatibus, eveniet vitae ipsa? Dolorem error saepe reiciendis consequatur, quaerat mollitia. Temporibus, perspiciatis repellat!',
            rate: 4,
            name: 'Linda Karen',
            pos: 'Travel Agent',
            profileImage: null
        },
    ]

    const ourReviews = data.map((ele, index)=>{
        return (
            <span key={index} className='flex flex-col items-start justify-center gap-y-3.5 px-3 mb-5 w-full sm:px-10'>
                <span className='flex flex-col items-start justify-center gap-y-1.5'>
                    <span className='text-green-700 text-left text-sm font-semibold'>{ele.title}</span>
                    <ReadOnlyRating rate={parseInt(ele.rate)} />
                </span>
                <span className='text-left text-xs'>{ele.reviewDesc}</span>
                <span className='flex items-center justify-start gap-x-2.5'>
                    <span className='h-10 w-10 overflow-hidden rounded-full'>
                        <img className='object-cover h-full w-full' src={ele.profileImage ? ele.profileImage : turkey} alt="loading error" />
                    </span>
                    <span className='text-xs font-thin'><b className='font-semibold'>{ele.name}</b> | {ele.pos}</span>
                </span>
            </span>
        )
    })
    return (
        <>
            {ourReviews}
        </>
    )
}
