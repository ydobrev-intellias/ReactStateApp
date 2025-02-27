import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ShoppingCart, SquarePlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchCart } from "../../state/slices/cartSlice";
function Header() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  return (
    <header className={styles.header}>
      <nav className={styles["header-nav"]}>
        <Link to="/" className={styles["header__logo"]}>
          Store
        </Link>
        <div className={styles["header-links"]}>
          <Link to="create" className={styles["header__link"]}>
            <SquarePlus size={32} />
          </Link>
          <Link to="cart" className={styles["header__link"]}>
            <ShoppingCart size={32} className={styles["header__cart"]} />
            <span className={styles["header__cart-count"]}>{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
