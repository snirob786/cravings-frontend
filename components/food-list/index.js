import Image from "next/image";


export default function FoodList() {
    return (
        <>
            <div className="py-14 w-4/5 mx-auto">
                <div className="pb-7">
                    <h3 className="font-sans text-5xl text-center">Featured Foods</h3>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-6">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image src="/sub-sandwich.jpg" alt="Sub Sandwich" width={500} height={500} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Sub Sandwich</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="flex items-center justify-between">
                                    <div className="priceContainer">
                                        <p className="text-sm font-bold">Price: 240 BDT</p>
                                    </div>
                                    <div className="categoryContainer">
                                        <p className="text-sm font-bold">Category: Fastfood</p>
                                    </div>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-primary hover:btn-light hover:btn-outline hoverBtn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}