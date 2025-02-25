import { Link } from "react-router-dom";
import styles from "./CartFallback.module.css";

function CartFallback() {
  return (
    <p className={styles["fallback__message"]}>
      There are no products in the cart. Go to {""}
      <Link to="/" className={styles["fallback__link"]}>
        Products
      </Link>
      .
    </p>
  );
}

export default CartFallback;
