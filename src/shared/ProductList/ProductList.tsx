import { ReactNode } from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import Product from "../../types/Product";
import styles from "./ProductList.module.css";

interface ProductCardProps {
  data: Array<Product>;
  cartFallback?: ReactNode;
}

function ProductList({ data, cartFallback }: ProductCardProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className={styles["product-list"]}>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        cartFallback
      )}
    </>
  );
}

export default ProductList;
