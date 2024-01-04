import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const LoginPage = () => {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <LoginForm />
          <Typography
            sx={{
              fontSize: 14,
              display: "flex",
              justifyContent: "center",
              mt: "1rem",
            }}
            color="text.secondary"
          >
            Don't have an account yet? Register now!
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button size="small">Register</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default LoginPage;
