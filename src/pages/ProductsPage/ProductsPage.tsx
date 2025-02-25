import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchProducts } from "../../state/slices/productSlice";
import Loader from "../../shared/Loader/Loader";
import ProductList from "../../shared/ProductList/ProductList";

function ProductsPage() {
  const { data, status } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === "PENDING") {
    return (
      <>
        <h1>Products</h1>
        <Loader />
      </>
    );
  }
  return (
    <>
      <h1>Products</h1>
      <ProductList data={data} />
    </>
  );
}

export default ProductsPage;
