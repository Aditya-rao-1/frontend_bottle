import {products} from "../constants";
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
    return (
        <section id='products' className='max-container p-5 max-sm:mt-12 box-shadoww'>
            <div>
                <h2 className='text-4xl font-bold'>Our <span className='text-[#ff7300]'>Popural </span>Products</h2>
                <p className='lg:max-w-lg mt-5 font-montserrat'>
                    Experience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design, and value
                </p>
            </div>
            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
                {products.map((product) => (
                    <PopularProductCard key={product.name} {...product}/>
                ))}

            </div>
        </section>
    )
}

export default PopularProducts