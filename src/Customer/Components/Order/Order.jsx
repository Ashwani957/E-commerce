import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

function Order() {

    const orderStatus = [
        { label: "On The Way", value: "on_the_way" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Returned", value: "returned" },
    ]

    return (
        <div className="px-2 lg:px-5 mt-10">
            <Grid container spacing={3}>

                {/* Sidebar - Filter Section */}
                <Grid item xs={12} md={3} lg={2}>
                    <div className="h-auto shadow-lg bg-white p-6 sticky top-5 rounded-md border border-gray-100">
                        <h1 className="font-bold text-xl mb-6 text-gray-800 border-b pb-2">Filters</h1>

                        <div className="space-y-6">
                            <div>
                                <h1 className="font-semibold text-gray-700 mb-4 uppercase text-xs tracking-wider">Order Status</h1>

                                {/* Status Options */}
                                <div className="space-y-3">
                                    {
                                        orderStatus.map((option) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={option.value}
                                                    defaultValue={option.value}
                                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor={option.value}
                                                    className="ml-3 text-sm text-gray-600 font-medium cursor-pointer hover:text-indigo-600 transition-colors"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>

                {/* Right Side - Order List */}
                <Grid item xs={12} md={9} lg={10} sx={{ width: "80%" }}>
                    <div className="space-y-5">
                        {
                            [1, 1, 1, 1, 1].map((item, index) => (
                                <OrderCard key={index} />
                            ))
                        }
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Order;