import React from 'react'

const Product = () => {
  return (
    <div className="card lg:w-60 lg:h-54 w-28  bg-base-100 shadow-xl ">
            <figure>
                <img
                    src="./prod1.jpg"
                    alt="Bambo Plate"
                    className='rounded-t-lg hover:scale-105 transition-all'
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-xl mt-2">Basket!</h2>

                <div className="card-actions flex justify-around ">
                    <button className="hover:bg-green-400 btn btn-primary text-xs text-white   bg-green-700 m-1 p-2 px-4 rounded-md mb-2 ">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Product
