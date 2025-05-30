import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Book/FoodPage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/Login/LoginPage';

export default function AppRoutes() {
  return <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/search/:searchTerm' element={<HomePage />} />
    <Route path='/tag/:tag' element={<HomePage />} />
    <Route path='/book/:id' element={<FoodPage />} />
    <Route path='/cart' element={<CartPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
}
