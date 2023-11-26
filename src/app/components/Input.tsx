import { InputBase, FormHelperText, FormControl } from "@mui/material";
import { makeStyles } from "@mui/material";
import useStyles from "../../generalAssets/styles/input";

import { FC } from "react";
import clsx from "clsx";

interface InputFieldProps {
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  error?: boolean;
  value?: string | number;
  placeholder?: string;
  icon?: string;
  readonly?: boolean;
  onChange?: (e: any) => void;
  name?: string;
  onIconClick?: (arg: any) => void;
  multiline?: boolean;
  rows?: number;
  inDropdown?: boolean;
  filter?: boolean;
  maxLength?: number;
}

const InputField: FC<InputFieldProps> = ({
  helperText,
  errorText,
  disabled = false,
  error = false,
  value = "",
  placeholder = "",
  icon,
  readonly = false,
  onChange,
  name = "",
  onIconClick,
  rows,
  multiline,
  inDropdown,
  filter,
  maxLength,
}) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth>
      <InputBase
        className={clsx({
          [classes.error]: error,
          [classes.inputBase]: true,
          [classes.readonly]: readonly,
          [classes.multiline]: multiline,
          [classes.inputMarginDropdown]: inDropdown,
          [classes.filter]: filter,
        })}
        classes={{ disabled: classes.disabled }}
        disabled={disabled}
        value={value}
        name={name}
        placeholder={placeholder}
        endAdornment={
          icon && (
            <img
              src={icon}
              alt="icon"
              onClick={onIconClick}
              className={classes.icon}
            />
          )
        }
        readOnly={readonly}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        inputProps={{
          maxLength: maxLength,
        }}
      />
      {helperText && (
        <FormHelperText
          variant="outlined"
          disabled={disabled}
          className={classes.helperText}
        >
          {helperText}
        </FormHelperText>
      )}
      {error && (
        <FormHelperText
          variant="outlined"
          error={error}
          disabled={disabled}
          className={classes.helperText}
        >
          {errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
