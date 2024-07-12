import React from 'react'

const Card = ({item}) => {
    //console.log(item.img_url);
  return (
    <>
    <div className='p-3 my-3'>
      <div className="card bg-base-300 w-80 dark:bg-slate-600 dark:text-white dark:border shadow-xl hover:shadow-2xl hover:scale-105 duration-300">
  <figure className='rounded-2xl h-96 '>
    <img
      src={item.img_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline h-6 hover:bg-pink-300 hover:text-white p-2">{item.price}$</div>
      <div className="badge badge-outline h-6 hover:bg-pink-300 hover:text-white p-2">Read Now !!</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
