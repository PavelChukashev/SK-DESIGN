import { React, useMemo } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SelectSource = ({ name, title, value, values, onBlur, onChange }) => {
  const normalizeValues = useMemo(() => {
    return values.map((value) => {
      if (typeof value === "object") {
        return value;
      } else {
        return { id: value, name: value };
      }
    });
  }, [values]);

  const handleChange = (e) => {
    onChange(name)(e.target.value);
  };

  return (
    <FormControl fullWidth size="small" className={"form-input"}>
      <InputLabel id="select_label">{title}</InputLabel>
      <Select
        labelId="select_label"
        name={name}
        value={value}
        label={title}
        onBlur={onBlur}
        onChange={handleChange}
      >
        {normalizeValues.map(({ id, name }) => {
          return (
            <MenuItem value={name} key={id}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectSource;