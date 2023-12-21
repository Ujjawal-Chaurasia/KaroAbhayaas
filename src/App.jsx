import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";
import Base from "./pages/Base/Base";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import OrderProvider from "./context/OrderProvider";
function App() {

  return (
      <BrowserRouter>
        <OrderProvider >
          <Routes>
            <Route path='/' element={<Signin />}/>
              <Route path='signin' element={<Signin />} />
              <Route path='signup' element={<Signup />} />
              <Route path='base' element={<Base />} />
          </Routes>
        </OrderProvider>
      </BrowserRouter>
  )
}
export default App
