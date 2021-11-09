import Button from "@mui/material/Button";

const BaseButton = (props) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {props.children}
    </Button>
  );
};

export default BaseButton;
