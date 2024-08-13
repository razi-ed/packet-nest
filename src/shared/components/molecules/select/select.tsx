import { Select as AntDSelect, SelectProps as AntDSelectProps } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./select.module.css";
/* ***style and styled components imports above this***  */

type SelectProps = Pick<
  AntDSelectProps,
  "options" | "onChange" | "defaultValue" | "placeholder"
>;

/* ***local declarations above this***  */

export default function Select(props: SelectProps) {
  const { options, onChange, defaultValue, placeholder } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <AntDSelect
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      className={styles["Select-element"]}
    />
  );
}
