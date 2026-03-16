
import { Route, Routes } from "react-router-dom";
import Cart from "../Customer/Components/Cart/Cart";
import Footer from "../Customer/Components/Footer/Footer";
import Navigation from "../Customer/Components/Navigation/Navigationbar";
import Product from "../Customer/Components/Product/Product";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails"
import Checkout from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";

function CustomerRoutes() {
    return (
        <div>

            <div>
                <Navigation />
            </div>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/product/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
                <Route path="/product/:productIdss" element={<ProductDetails />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/account/order" element={<Order />}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
                {/* <HomePage /> */}
                {/* <Product /> */}
                {/* <ProductDetails /> */}

                {/* <Cart /> */}
                {/* <Checkout /> */}
                {/* <Order /> */}
                {/* <OrderDetails /> */}
            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    )
}
export default CustomerRoutes;