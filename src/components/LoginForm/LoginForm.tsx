import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { Button, TextField } from "@mui/material";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const logUserIn = ({ email, password }: LoginFormValues) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("You have successfully logged in!");
      })
      .catch((err) => window.alert(err.message));
  };

  return (
    <form
      onSubmit={handleSubmit(logUserIn)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        variant="standard"
        type="email"
        label="email"
        placeholder="email"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("email", { required: true })}
      />

      <TextField
        variant="standard"
        type="password"
        label="password"
        placeholder="password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("password", { required: true })}
      />
      <Button type="submit" size="small">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;

