import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import ProductList from "../../shared/ProductList/ProductList";
import CartFallback from "../../shared/CartFallback/CartFallback";
import { useEffect } from "react";
import Loader from "../../shared/Loader/Loader";
import { fetchCart } from "../../state/slices/cartSlice";

function CartPage() {
  const { cart, status } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  if (status === "PENDING") {
    return (
      <>
        <h1>Cart</h1>
        <Loader />
      </>
    );
  }
  return (
    <>
      <h1>Cart</h1>
      <ProductList data={cart} cartFallback={<CartFallback />} />
    </>
  );
}

export default CartPage;
