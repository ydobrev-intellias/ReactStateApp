import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ProductList from "../../shared/ProductList/ProductList";
import CartFallback from "../../shared/CartFallback/CartFallback";

function CartPage() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  return (
    <>
      <h1>Cart</h1>
      <ProductList data={cart} cartFallback={<CartFallback />} />
    </>
  );
}

export default CartPage;
