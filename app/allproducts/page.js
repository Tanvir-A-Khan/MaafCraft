import React from "react";
import Product from "../components/Product";
import Link from "next/link";


const AllProduct = () => {
    return (
        <div className="  px-auto">
            
            <div className="flex flex-wrap md:justify-start justify-center  gap-5 md:mx-28 mx-4 my-3 ">
                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className="">
                    <Product />
                </Link>

                <Link href="/view-product" className=" ">
                    <Product />
                </Link>
            </div>
        </div>
    );
};

export default AllProduct;
