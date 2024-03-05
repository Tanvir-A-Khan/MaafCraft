import React from 'react'

const Product = () => {
  return (
    <div className="card w-60 h-54 bg-base-100 shadow-xl hover:scale-105">
            <figure>
                <img
                    src="./prod1.jpg"
                    alt="Bambo Plate"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-xl">Bamboo!</h2>

                <div className="card-actions flex justify-around ">
                    <button className="hover:bg-green-600 btn btn-primary text-xs text-white font-semibold  bg-green-700 m-1 p-1 rounded-md  ">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Product
