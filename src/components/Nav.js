import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/CheckOut';
import Cart from './pages/Cart';
import BlogSingle from './pages/BlogSingle';

export default function Nav() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/BlogSingle" element={<BlogSingle />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/ProductDetails" element={<ProductDetails />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Login" element={<Login />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    )
}
