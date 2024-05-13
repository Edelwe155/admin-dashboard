import styles from "./namedTextInput.module.css";

export const NamedTextInput = ({
  name,
  disabled = false,
  placeholder = "",
  type = "text",
}) => {
  return (
    <div key={name} className={styles.container}>
      <label className={styles.inputTitle}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};
