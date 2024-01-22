import { Typography, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from "firebase/auth";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginPage from "../LoginPage/LoginPage";

interface UserPageProps {
  loggedIn: boolean;
  src: string;
  setNewProfilePhoto: (value: File) => void;
}

const UserPage = ({ loggedIn, src, setNewProfilePhoto }: UserPageProps) => {
  return (
    <>
      {loggedIn && auth.currentUser ? (
        <>
          <Card>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
              >
                <Grid item xs={4} sm={2} md={2} lg={2}>
                  <CardMedia
                    sx={{
                      height: 140,
                      width: 140,
                      mt: "1rem",
                      mb: "1rem",
                      ml: "1rem",
                    }}
                    image={src}
                    title="your profile photo"
                  />
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={10}
                  lg={14}
                  sx={{
                    display: "flex",
                    mb: "1rem",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "column",
                      lg: "row",
                    },
                    alignItems: "start",
                  }}
                >
                  <Grid item xs={4} sm={6} md={10} lg={7}>
                    <Box sx={{ p: "1rem" }}>
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
                        You can choose a profile photo and upload it to your
                        avatar.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={6}
                    md={10}
                    lg={7}
                    sx={{
                      display: "flex",
                      mb: "1rem",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                        xl: "row",
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
                          lg: "row",
                        },
                      }}
                    >
                      <ProfilePhotoForm
                        setNewProfilePhoto={setNewProfilePhoto}
                      />
                    </Typography>
                    <Button
                      onClick={() => signOut(auth)}
                      size="small"
                      sx={{ ml: "1rem" }}
                    >
                      Log out
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </>
      ) : (
        <LoginPage
          setNewProfilePhoto={setNewProfilePhoto}
          src={src}
          loggedIn={loggedIn}
        />
      )}
    </>
  );
};

export default UserPage;
