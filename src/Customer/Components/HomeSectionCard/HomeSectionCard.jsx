
const HomeSectionCard=({product})=>{
    console.log("product",product)
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg  shadow-lg overflow-hidden w-[15rem] mx-3 transition-all hover:shadow-xl hover:scale-105 " >

        <div className='h-[13rem] w-[10rem] object-cover'>
            <img  className=" object-cover object-top w-full h-full" src={product.image} alt="" />
        </div>

        {/* Descriptoin */}
        <div className="p-4">
            <h3 className='text-lg font-medium text-gray-900'> {product.brand}</h3>
            <p className="mt-2 text-sm text-gray-500"> Men solid Pure Cotton</p>
        </div>
        </div>
    )
}
export default HomeSectionCard;