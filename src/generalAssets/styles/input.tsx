import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  inputBase: {
    minHeight: "36px",
    border: "1px solid",
    marginBottom: "8px",
    borderColor: theme.palette.action.focus,
    borderRadius: theme.shape.sharpBorderRadius,
    background: theme.palette.background.default,
    outline: "none",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2, 5),
    fontFamily: theme.typography.body2.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    lineHeight: theme.typography.body2.lineHeight,
    letterSpacing: theme.typography.body2.letterSpacing,
    "&:hover": {
      borderColor: theme.palette.text.secondary,
    },
    "& .MuiInputBase-input:focus": {
      color: theme.palette.common.black,
    },
  },
  disabled: {
    border: "none",
    background: theme.palette.info[50],
    color: theme.palette.info[60],
    "&:hover": {
      border: "none",
    },
    "&.MuiInputBase-input.Mui-disabled": {
      background: "none",
    },
  },
  error: {
    border: "1px solid",
    borderColor: theme.palette.error.main,
    marginBottom: "10px",
    "&:hover": {
      borderColor: theme.palette.error.main,
    },
  },
  helperText: {
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
    letterSpacing: theme.typography.body1.letterSpacing,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },
  readonly: {
    cursor: "pointer",
    "& .MuiInputBase-input": {
      cursor: "pointer",
    },
  },
  icon: {
    cursor: "pointer",
    marginLeft: theme.spacing(5),
  },
  multiline: {
    paddingTop: "8px",
  },
  inputMarginDropdown: {
    marginBottom: "unset",
  },
  filter: {
    borderColor: theme.palette.primary.main,
  },
}));

export default useStyles;
function child(arg0: number) {
  throw new Error("Function not implemented.");
}
