import { FormEvent } from "react";
import styles from "../styles/components/Form.module.scss";

interface Props {
  children: JSX.Element;
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  submitLable: string;
}

export default function Form(props: Props) {
  return (
    <form className={styles.form} onSubmit={props.submitHandler}>
      {props.children}

      <input type="submit" value={props.submitLable} />
    </form>
  );
}
