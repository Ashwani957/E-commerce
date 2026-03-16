import './App.css'
import Navigation from "./Customer/Components/Navigation/Navigationbar"
import HomePage from './Customer/Pages/HomePage/HomePage'
import Footer from './Customer/Components/Footer/Footer'
import Product from './Customer/Components/Product/Product'
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails"
import Cart from "./Customer/Components/Cart/Cart"
import Checkout from './Customer/Components/Checkout/Checkout'
import Order from './Customer/Components/Order/Order'
import OrderDetails from './Customer/Components/Order/OrderDetails'
import CustomerRoutes from './Routers/CustomerRoutes'
import { Route, Routes } from 'react-router-dom'
function App() {


  return (
    <div className="w-full">


      {/* Here we also make a routes */}
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>

      </Routes>


      <div>

      </div>

    </div>
  )
}

export default App
