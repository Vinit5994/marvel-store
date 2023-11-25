import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail'
import Home from './components/Home'
import { ComicContextProvider } from './components/Comics-context'
import { CartContextProvider } from './components/CartContext'
import CartDetail from './components/CartDetail'
import About from './components/About'
import News from './components/News'
import Order from './components/Order'
import { OrderContextProvider } from './components/OrderContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ComicContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <OrderContextProvider>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/cart' element={<CartDetail />} />
                <Route path='/about' element={<About />} />
                <Route path='/news' element={<News />} />
                <Route path='/order' element={<Order />} />
              </Routes>
            </OrderContextProvider>
          </BrowserRouter>
        </CartContextProvider>
      </ComicContextProvider>

    </div>
  )
}

export default App
