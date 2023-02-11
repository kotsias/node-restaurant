import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Cart from './cart/Cart';
import Orders from './orders/Orders';

const Main = () => {
return (         
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
    </Routes>
);
}
export default Main;