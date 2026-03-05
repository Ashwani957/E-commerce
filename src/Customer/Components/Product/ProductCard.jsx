

const ProductCard=()=>{
    return (

        <div className="productCard w-[15rem ] m-3 transition-all cursor-pointer ">
          {/* Image  */}
          <div className="h-[20rem]">
            <img className="h-full   object-cover object-left-top  " src="https://rukminim1.flixcart.com/image/612/612/kasjjww0/ethnic-set/g/u/c/3xl-j0003-set-janasya-original-imafsadzyzarf93y.jpeg?q=70" alt=""/>
          </div>

          {/* Card Details Section */}
          <div className="textPart bg-white p-3">
            <div>
                <p className="font-bold opacity-60">Universalolf</p>
                <p>CAsual out filt sleevers soilid women </p>
            </div>
            {/* Price */}
            <div className="font-semibold opacity-50">
                <p>199</p>
            </div>
          </div>


        </div>
    )
}

export default ProductCard;