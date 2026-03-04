import './App.css'
import Navigation from  "./Customer/Components/Navigation/Navigationbar"
import HomePage from './Customer/Pages/HomePage/HomePage'
function App() {
 

  return (
     <div className="w-full">
      
      <Navigation/>
      <div>
      <HomePage/>
      </div>
     </div>
  )
}

export default App
