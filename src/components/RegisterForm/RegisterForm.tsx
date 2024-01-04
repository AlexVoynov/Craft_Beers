import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";

interface RegisterFormValues {
  email: string;
  password: string;
  password2: string;
  name: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const registerUserWithFormData = ({
    email,
    password,
    password2,
    name,
  }: RegisterFormValues) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Successfully registered new user");
          const auth = getAuth();
          function updadeUserProfile(name: string) {
            if (auth.currentUser) {
              updateProfile(auth.currentUser, {
                displayName: name,
              })
                .then(() => {
                  alert("Profile updated!");
                })
                .catch((error) => {
                  alert(`Failed to update user info, ${error.message}`);
                });
            }
          }
          updadeUserProfile(name);
        })
        .catch((err) => {
          window.alert(`Failed to register new user, ${err.message}`);
        });
    } else {
      window.alert("Passwords are not equal!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(registerUserWithFormData)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography
        align="center"
        color="text.secondary"
        sx={{ fontSize: 14, mt: "1rem" }}
        gutterBottom
      >
        Register new account
      </Typography>
      <TextField
        variant="standard"
        type="name"
        label="name"
        placeholder="name"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("name", { required: true })}
      />
      <TextField
        variant="standard"
        type="email"
        label="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      />
      <TextField
        variant="standard"
        type="password"
        label="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password", { required: true })}
      />
      <TextField
        variant="standard"
        type="password"
        label="repeat password"
        placeholder="repeat password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password2", { required: true })}
      />
      <Button size="small" type="submit" sx={{ display: "block", mx: "auto" }}>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;


