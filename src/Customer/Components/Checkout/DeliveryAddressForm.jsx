import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCart/AddressCard";

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log("address data:", Object.fromEntries(data));
    }

    return (
        <div className="flex gap-4">

            {/* Left Side: Saved Address Cards */}
            <div className="w-[280px] flex-shrink-0 border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                    <AddressCard />
                    <Button
                        sx={{ mt: 2, bgcolor: "#9155fd", "&:hover": { bgcolor: "#7d3fef" } }}
                        variant="contained"
                        size="large"
                    >
                        Deliver Here
                    </Button>
                </div>
            </div>

            {/* Right Side: New Address Form */}
            <div className="flex-1">
                <Box className="border rounded-md shadow-md p-5">
                    <p className="font-semibold text-lg mb-4 text-gray-700">Add New Address</p>
                    <form onSubmit={handleSubmit}>

                        {/* Row 1: First Name + Last Name */}
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="family-name" />
                            </Grid>
                        </Grid>

                        {/* Row 2: Address — standalone full width */}
                        <div className="mt-6 w-full">
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="street-address"
                                multiline
                                rows={4}
                            />
                        </div>

                        {/* Row 3: City + State */}
                        <Grid container spacing={3} className="mt-0">
                            <Grid item xs={6}>
                                <TextField required id="city" name="city" label="City" fullWidth autoComplete="address-level2" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField required id="state" name="state" label="State / Province / Region" fullWidth autoComplete="address-level1" />
                            </Grid>
                        </Grid>

                        {/* Row 4: Zip + Phone */}
                        <Grid container spacing={3} className="mt-0">
                            <Grid item xs={6}>
                                <TextField required id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="postal-code" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="tel" />
                            </Grid>
                        </Grid>

                        {/* Submit */}
                        <div className="mt-6">
                            <Button
                                sx={{ py: 1.5, bgcolor: "#9155fd", "&:hover": { bgcolor: "#7d3fef" } }}
                                size="large"
                                variant="contained"
                                type="submit"
                            >
                                Deliver Here
                            </Button>
                        </div>

                    </form>
                </Box>
            </div>

        </div>
    )
}

export default DeliveryAddressForm;