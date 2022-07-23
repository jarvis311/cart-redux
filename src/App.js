import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';


function App() {
  return (

    <div className="App">
      <Provider store={store}>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>




        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
