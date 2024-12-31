import "../style/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Questionnaire from "./Questionnaire";
import PWReset from "./PWReset";
import PersonalData from "./PersonalData";
import LandingPageAdmin from "./LandingPageAdmin";
import LandingPageDelivery from "./LandingPageDelivery";
import LandingPageEmployee from "./LandingPageEmployee";
import LandingPageCustomer from "./LandingPageCustomer";
import LandingPageProvider from "./LandingPageProvider";
import ViewOrders from "./ViewOrders";
import Order from "./Order";
import ViewProducts from "./ViewProducts";
import Product from "./Product";
import AddProduct from "./AddProduct";
import ViewClients from "./ViewClients";
import Client from "./Client";
import ViewUsers from "./ViewUsers";
import User from "./User";
import SearchProducts from "./SearchProducts";
import ViewProductsSearched from "./ViewProductsSearched";
import ProductPageClient from "./ProductPageClient";
import ViewProductsCustomer from "./ViewProductsCustomer";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import CheckoutCard from "./CheckoutCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/password-reset" element={<PWReset />} />
        <Route path="/personal-data" element={<PersonalData />} />
        <Route path="/landing-page-admin" element={<LandingPageAdmin />} />
        <Route path="/landing-page-delivery" element={<LandingPageDelivery />} />
        <Route path="/landing-page-employee" element={<LandingPageEmployee />} />
        <Route path="/landing-page-customer" element={<LandingPageCustomer />} />
        <Route path="/landing-page-provider" element={<LandingPageProvider />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path="/order" element={<Order />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-clients" element={<ViewClients />} />
        <Route path="/client" element={<Client />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/user" element={<User />} />
        <Route path="/search-products" element={<SearchProducts />} />
        <Route path="/view-products-searched" element={<ViewProductsSearched />} />
        <Route path="/product-page-client" element={<ProductPageClient />} />
        <Route path="/view-products-customer" element={<ViewProductsCustomer />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-card" element={<CheckoutCard />} />
        <Route path="/client/:id" element={<Client />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;