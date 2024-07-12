import list from '../../public/list.json';
import React from 'react'
import Card from './Card';
const AllBooks = () => {
   console.log(list);
  return (
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
         list.map((book)=>(
          <Card item={book} key={book.id}/>
         ))
      }
    </div>
  )
}

export default AllBooks
