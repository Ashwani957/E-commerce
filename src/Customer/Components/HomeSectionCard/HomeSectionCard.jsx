
const HomeSectionCard=({product})=>{
    console.log("product",product)
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg border border-gray-100 overflow-hidden w-[15rem] transition-all hover:shadow-md hover:-translate-y-1" >
            <div className='h-[18rem] w-full'>
                <img className="object-cover object-top w-full h-full" src={product.image} alt="" />
            </div>

            {/* Description */}
            <div className="p-4 w-full">
                <h3 className='text-lg font-medium text-gray-900'> {product.brand}</h3>
                <p className="mt-1 text-sm text-gray-500"> Men solid Pure Cotton</p>
            </div>
        </div>
    )
}
export default HomeSectionCard;