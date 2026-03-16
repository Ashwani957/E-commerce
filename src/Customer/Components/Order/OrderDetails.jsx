import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCart/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import { StarBorder } from "@mui/icons-material";

function OrderDetails() {
    return (
        <div className="px-5 lg:px-20 mt-10">
            <div className="p-6 shadow-sm border rounded-md bg-white">
                <h1 className="font-bold text-xl mb-6 text-gray-800 border-b pb-4">Delivery Address</h1>
                <AddressCard />
            </div>

            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>

            <Grid container className="space-y-5">
                {[1, 1, 1, 1].map((item, index) => (
                    <Grid 
                        item 
                        key={index}
                        container 
                        className="shadow-md rounded-md p-5 border w-full hover:shadow-lg transition-shadow bg-white" 
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                        <Grid item xs={12} md={8}>
                            <div className="flex items-center space-x-6">
                                <img 
                                    className="w-[6rem] h-[6rem] object-cover object-top rounded-md shadow-sm border border-gray-100" 
                                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70" 
                                    alt="Product" 
                                />

                                <div className="space-y-2">
                                    <p className="font-bold text-gray-800 text-lg">Men Slim Mid Rise Black Jeans</p>
                                    <p className="text-sm font-medium text-gray-500">
                                        <span className="mr-6">Color: Pink</span>
                                        <span>Size: M</span>
                                    </p>
                                    <p className="text-sm text-gray-400">Seller: Linaria</p>
                                    <p className="font-bold text-xl text-gray-900 mt-2">₹1099</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} className="flex md:justify-end mt-4 md:mt-0">
                            <Box 
                                sx={{ color: deepPurple[500] }} 
                                className="flex items-center space-x-2 cursor-pointer hover:text-purple-700 transition-colors group"
                            >
                                <StarBorder sx={{ fontSize: "2rem" }} className="group-hover:scale-110 transition-transform" />
                                <span className="font-semibold text-sm tracking-wide">RATE & REVIEW PRODUCT</span>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default OrderDetails;