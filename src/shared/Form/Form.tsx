import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { createProduct } from "../../state/slices/productSlice";
import styles from "./Form.module.css";
import FormValues from "../../types/FormValues";
import Input from "../Input/Input";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(createProduct(data));
    reset();
    navigate("/");
  };
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          registerName="title"
          label="Title"
          register={register}
          required
        />
        <Input
          registerName="price"
          label="Price"
          register={register}
          type="number"
          required
        />
        <Input
          registerName="image"
          label="Image URL"
          register={register}
          required
        />
        <input type="submit" className={styles["form__button"]} />
      </form>
    </div>
  );
}

export default Form;
