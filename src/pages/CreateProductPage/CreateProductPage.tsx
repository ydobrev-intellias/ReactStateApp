import Form from "../../shared/Form/Form";
import styles from "./CreateProductPage.module.css";
function CreateProductPage() {
  return (
    <>
      <h1 className={styles["container__title"]}>Create Product</h1>
      <Form />
    </>
  );
}

export default CreateProductPage;
