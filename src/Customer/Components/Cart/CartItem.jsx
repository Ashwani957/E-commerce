import React from "react"
import { Button, IconButton } from "@mui/material"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const CartItem = () => {
    return (
        <div className="p-5 shadow-sm border rounded-lg transition-shadow hover:shadow-md bg-white">
            <div className="flex items-center">
                <div className="w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] flex-shrink-0">
                    <img className="w-full h-full object-cover rounded-md object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70" alt="" />
                </div>

                <div className="ml-6 flex flex-col justify-between h-full space-y-2">
                    <div>
                        <p className="font-semibold text-lg text-gray-900 line-clamp-1">Mens Slim Mid Rise Black Jeans</p>
                        <p className="opacity-70 text-sm mt-1 text-gray-600">Size: L, White</p>
                        <p className="opacity-70 text-sm mt-1 text-gray-600">Seller: Crishtaliyo 2 fashion</p>
                    </div>

                    <div className="flex space-x-3 items-center text-gray-900 pt-2">
                        <p className="font-semibold text-lg">₹199</p>
                        <p className="opacity-50 line-through text-md">₹211</p>
                        <p className="text-green-600 font-semibold text-md">5% Off</p>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div className="flex items-center justify-between pt-6 w-full">
                <div className="flex items-center space-x-2 ml-2 lg:ml-6">
                    <IconButton sx={{ color: "text.secondary" }}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-4 border rounded-md font-medium text-gray-800">1</span>
                    <IconButton sx={{ color: "#9155fd" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button sx={{ color: "#9155fd", fontWeight: 600 }}>REMOVE</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem 