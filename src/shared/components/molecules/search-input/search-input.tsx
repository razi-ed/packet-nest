import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface ISearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  id?: string;
}

/* ***local declarations above this***  */

export default function SearchInput(props: ISearchInputProps) {
  const { name, placeholder, id, defaultValue, onChange } = props;
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
    <Input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      allowClear
      size="large"
      suffix={<SearchOutlined />}
      defaultValue={defaultValue}
      id={id}
      autoComplete="off"
    />
  );
}
