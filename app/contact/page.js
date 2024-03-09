import React from "react";

function ContactForm() {
    return (
        <div className="md:mx-28 mx-4">
            <div className="container my-24 mx-auto md:px-6 ">
                {/* Section: Design Block */}
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                            <h2 className="mb-6 text-3xl font-bold">
                                Contact us
                            </h2>
                            <p className="mb-6 text-black dark:text-black">
                                <strong>Factory: </strong> South Debipur
                                (Ranigonj), Ghoraghat, Dinajpur, Bangladesh
                                <br />
                                <br />
                                <strong>Head office: </strong>
                                Plot #111 (8th Floor), Road #13 (Ranavola
                                Avenue), Sector #10, Uttara Model Town,
                                Bangladesh.
                            </p>
                            <p className="mb-2 text-black dark:text-black">
                            Sector #10, Uttara Model Town,
                                Bangladesh.
                            </p>
                            <p className="mb-2 text-black dark:text-black">
                                +88 01942 257473
                            </p>
                            <p className="mb-2 text-black dark:text-black">
                            maafcraftbd@gmail.com
                            </p>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                            <form>
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init
                                >
                                    <input
                                        type="text"
                                        className=" bg-gray-100 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-green-800 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-green-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput90"
                                        placeholder="Name"
                                    />
                                    <label
                                        className=" pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-green-800"
                                        htmlFor="exampleInput90"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init
                                >
                                    <input
                                        type="email"
                                        className="bg-gray-100 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-green-800 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-green-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput91"
                                        placeholder="Email address"
                                    />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-green-800"
                                        htmlFor="exampleInput91"
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init
                                >
                                    <textarea
                                        className=" bg-gray-100 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Your message"
                                    ></textarea>
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-green-800 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-green-800"
                                    >
                                        Message
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mb-6 inline-block w-full rounded bg-green-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-800-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-800-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
        </div>
        /* Container for demo purpose */
    );
}

export default ContactForm;
