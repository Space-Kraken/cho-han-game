import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function CustomInput(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    text: props.getAmount,
  });
  return (
    <div>
      <FormControl
        fullWidth
        className={classes.margin}
        variant="outlined"
        size="small"
      >
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.text}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={(e) => {
            setValues({ amount: e.target.value });
            props.getAmount(e.target.value);
          }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={props.space}
        />
      </FormControl>
    </div>
  );
}
