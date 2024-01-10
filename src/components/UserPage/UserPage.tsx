import { Typography, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from "firebase/auth";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomePage from "../HomePage/HomePage";

interface UserPageProps {
  loggedIn: boolean;
  src: string;
}

const UserPage = ({ loggedIn, src }: UserPageProps) => {
  return (
    <>
      {loggedIn && auth.currentUser && (
        <>
          <Card>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}
              >
                <Grid item xs={4} sm={2} md={2} xl={2}>
                  <CardMedia
                    sx={{ height: 140, width: 140, mt: "1rem", mb: "1rem" }}
                    image={src}
                    title="your profile photo"
                  />
                </Grid>
                <Grid item xs={4} sm={6} md={10} xl={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Your profile {auth.currentUser.displayName}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      Your email: {auth.currentUser.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      You can select a profile photo and send it to the app.
                      After uploading, the photo will be visible on your avatar.
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={8}
                  md={12}
                  xl={5}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      xl: "column",
                    },
                    alignItems: "start",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        xl: "column",
                      },
                    }}
                  >
                    <ProfilePhotoForm />
                  </Typography>
                  <Button
                    onClick={() => signOut(auth)}
                    // component="a"
                    // href=""
                    size="small"
                    sx={{ ml: "1rem" }}
                  >
                    Log out
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </>
      )}
    </>
  );
};

export default UserPage;
