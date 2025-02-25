import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { AppDispatch, RootState } from "../../state/store";
import { addToCart, removeFromCart } from "../../state/slices/cartSlice";
import { deleteProduct } from "../../state/slices/productSlice";
import { CircleX } from "lucide-react";

interface ProductCardProps {
  product: any;
}
function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.cartReducer);

  const isAdded = cart.find((item) => item.id === product.id);

  return (
    <div className={styles["product-card"]}>
      <img
        src={product.image}
        alt={product.title}
        className={styles["product-card__image"]}
      />
      <h3 className={styles["product-card__title"]}>{product.title}</h3>
      <span className={styles["product-card__price"]}>{product.price} $</span>

      <button
        className={styles["product-card__button"]}
        onClick={
          isAdded
            ? () => dispatch(removeFromCart(product.id))
            : () => dispatch(addToCart(product))
        }
      >
        {isAdded ? "Remove from cart" : "Add to cart"}
      </button>
      <div
        className={[
          styles["button-group"],
          styles["button-group--delete"],
        ].join(" ")}
      >
        <CircleX
          size={32}
          className={styles["button-group__button"]}
          onClick={() => {
            dispatch(removeFromCart(product.id));
            dispatch(deleteProduct(product.id));
          }}
        />
        <p className={styles["button-group__tooltip"]}>Delete Product</p>
      </div>
    </div>
  );
}

export default ProductCard;
