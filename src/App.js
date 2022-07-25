import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';


function App() {
  return (

    <div className="App">
      <Provider store={store}>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/infoproduct/:id' element={<SingleProduct />} />

          </Routes>




        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
