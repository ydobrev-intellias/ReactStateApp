import { UseFormRegister } from "react-hook-form";
import FormValues from "../../types/FormValues";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  register: UseFormRegister<FormValues>;
  required: boolean;
  registerName: keyof FormValues;
  type?: string;
};
function Input({ label, registerName, register, required, type }: InputProps) {
  return (
    <div className={styles["input-group"]}>
      <label className={styles["input-group__label"]}>{label}</label>
      <input
        className={styles["input-group__input"]}
        {...register(registerName, { required })}
        type={type ?? "text"}
      />
    </div>
  );
}
export default Input;
