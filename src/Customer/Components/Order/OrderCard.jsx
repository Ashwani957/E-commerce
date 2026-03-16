import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

function OrderCard() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/{5}`)} className="p-5 shadow-lg border rounded-md hover:shadow-2xl transition-all cursor-pointer bg-white">
            <Grid container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>

                <Grid item xs={6}>
                    <div className="flex items-center space-x-5">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top rounded-sm shadow-sm"
                            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
                            alt="Product"
                        />
                        <div className="ml-5 space-y-1">
                            <p className="font-semibold text-gray-800 text-lg">Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-60 text-sm font-medium">Size: M</p>
                            <p className="opacity-60 text-sm font-medium">Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p className="font-bold text-xl text-gray-900">₹1099</p>
                </Grid>

                <Grid item xs={4}>
                    {true && (
                        <div className="space-y-1">
                            <p className="flex items-center space-x-2">
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600" />
                                <span className="font-semibold text-sm text-gray-800">
                                    Delivered on March 03
                                </span>
                            </p>
                            <p className="text-xs text-gray-500 font-medium">
                                Your item has been delivered successfully
                            </p>
                        </div>
                    )}

                    {false && (
                        <p className="text-sm font-semibold text-gray-800">
                            Expected Delivery on March 15
                        </p>
                    )}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard;