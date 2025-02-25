import Loader from "../Loader/Loader";
import styles from "./SuspenseLoader.module.css";

function SuspenseLoader() {
  return (
    <div className={styles["suspense-loader"]}>
      <Loader />
    </div>
  );
}

export default SuspenseLoader;
