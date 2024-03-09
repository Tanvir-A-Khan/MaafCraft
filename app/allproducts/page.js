import React from "react";
import Product from "../components/Product";
import Link from "next/link";

const AllProduct = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-evenly  gap-4 md:mx-28 mx-4 my-3 ">
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
