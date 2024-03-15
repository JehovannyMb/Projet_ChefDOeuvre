import React from 'react'
import Item_1 from './Item_1'

export default function Menu() {
  return (
    <>
     <div className=' text-white h-80 w-full'>
        <div className='flex justify-between'>
          <div>
            <h1 className=' w-full text-left font-bold text-5xl p-2'>J E M</h1>

          </div>
          <div>
            <button className='p-2'>Menu</button>
          </div>
        </div>
        <h1 className='  w-full text-center text-3xl font-bold p-10 '>
          Closer the university of the student
        </h1>
        <h2 className=' opacity-50 p-2 text-center'>
          Makes sure you have an account before to get started.
        </h2>
      </div>
      <Item_1 />

    </>
  )
}
