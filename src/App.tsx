import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./shared/Layout/Layout";
import Header from "./shared/Header/Header";
import { lazy, Suspense } from "react";
import Loader from "./shared/Loader/Loader";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));

const CartPage = lazy(() => import("./pages/CartPage/CartPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <ProductsPage />
                </Suspense>
              }
            />
            <Route path="create" element={<CreateProductPage />} />
            <Route
              path="cart"
              element={
                <Suspense fallback={<Loader />}>
                  <CartPage />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
