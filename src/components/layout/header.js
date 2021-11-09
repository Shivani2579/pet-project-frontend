import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { withRouter } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = (props) => {
  let backIcon;
  if (props.location.pathname !== "/") {
    backIcon = (
      <ArrowBackIcon
        sx={{ margin: "5px" }}
        onClick={() => props.history.goBack()}
      />
    );
  }
  return (
    <AppBar>
      <Toolbar>
        {backIcon}
        <Typography>Candidates</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
