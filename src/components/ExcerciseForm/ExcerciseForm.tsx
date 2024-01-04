import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";

interface ExcerciseFormProps {
  setUsersFirstName: (val: string) => void;
}

interface ExcerciseFormValues {
  name: string;
}

const ExcerciseForm = (
) => {
  const { register, handleSubmit } = useForm<ExcerciseFormValues>();

  const submitHandler = ({ name }: ExcerciseFormValues) => {
    updadeUserProfile(name);
  };

  const auth = getAuth();
  function updadeUserProfile(name: string) {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          // Profile updated!
          console.log('Profile updated!');
        })
        .catch((error) => {
          // An error occurred
          console.log(`Failed to update user info, ${error.message}`);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField placeholder="name" {...register("name", { required: true })} />
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ExcerciseForm;
