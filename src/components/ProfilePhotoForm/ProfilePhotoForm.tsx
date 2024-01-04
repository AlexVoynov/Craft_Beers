import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../helpers/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

interface ProfilePhotoFormValues {
  profilePhoto: FileList;
}

const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormValues>();

  const uploadPhoto = (data: ProfilePhotoFormValues) => {
    const photo = data.profilePhoto[0];
    if (auth.currentUser) {
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
      uploadBytes(storageRef, photo);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Typography
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            xl: "column",
          },
          alignItems: "start",
          justifyItems: "start",
          justifyContent: "start",
        }}
      >
        <Button component="label" size="small" sx={{ ml: "1rem" }}>
          Select photo
          <input
            hidden
            type="file"
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button type="submit" size="small" sx={{ ml: "1rem" }}>
          Send photo
        </Button>
        <Button
          component="a"
          href="/"
          size="small"
          sx={{ ml: "1rem" }}
        >
          Upload photo
        </Button>
      </Typography>
    </form>
  );
};

export default ProfilePhotoForm;
