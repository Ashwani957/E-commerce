import React from 'react'
import CartItem from './CartItem';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate("/checkout?step=2")
    }
    return (
        <div>

            <div className="lg:grid grid-cols-3 gap-8 lg:px-16 relative mt-10 mb-20">

                <div className="col-span-2 space-y-6">
                    {[1, 1, 1, 1, 1].map((item, index) => <CartItem key={index} />)}
                </div>

                {/* Right Card */}
                <div className="px-5 sticky top-10 mt-5 lg:mt-0 lg:h-[fit-content]">
                    <div className="border border-gray-200 shadow-sm rounded-lg bg-white p-6">
                        <p className="uppercase font-bold text-gray-500 pb-4 tracking-wider">Price Details</p>
                        <Divider />
                        <div className="space-y-4 font-medium mt-4 mb-4">
                            <div className="flex justify-between text-gray-700">
                                <span>Price (5 items)</span>
                                <span>₹4590</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>-₹4590</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <Divider sx={{ my: 1 }} />
                            <div className="flex justify-between text-gray-900 font-bold text-lg pt-3">
                                <span>Total Amount</span>
                                <span>₹4590</span>
                            </div>

                        </div>

                    </div>
                    {/* Checkout Button */}
                    <Button onClick={handleCheckOut} variant="contained" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", width: "100%", mt: "1.5rem", borderRadius: "0.5rem", "&:hover": { bgcolor: "#7b45db" } }}  >
                        Checkout
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Cart;