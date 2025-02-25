import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./shared/Layout/Layout";
import Header from "./shared/Header/Header";
import { lazy, Suspense } from "react";
import SuspenseLoader from "./shared/SuspenseLoader/SuspenseLoader";
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const CreateProductPage = lazy(
  () => import("./pages/CreateProductPage/CreateProductPage")
);
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
                <Suspense fallback={<SuspenseLoader />}>
                  <ProductsPage />
                </Suspense>
              }
            />
            <Route
              path="create"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <CreateProductPage />
                </Suspense>
              }
            />
            <Route
              path="cart"
              element={
                <Suspense fallback={<SuspenseLoader />}>
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
