import React from 'react'

export default function SnippetsNotFound() {
    return (<div className='p-6 flex flex-col items-center'>
        <h1 className='text-2xl font-bold m-2 px-3 border-b-2 w-fit'>404</h1>
        <h1 className='text-xl text-center font-medium'>
            Sorry, but we could not found that particular snippet
        </h1>
    </div>
    )
}
