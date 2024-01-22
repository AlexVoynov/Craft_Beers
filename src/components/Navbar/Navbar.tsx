import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

interface NavbarProps {
  loggedIn: boolean;
  profilePhoto: string;
}

const Navbar = ({ loggedIn, profilePhoto }: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "success.main" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Grid
            columns={{ xs: 12 }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={4} sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {loggedIn
                  ? [
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </Link>,
                      <Link
                        to="/search"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Search</Typography>
                        </MenuItem>
                      </Link>,
                      <Link
                        to="/user"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                      </Link>,
                    ]
                  : [
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </Link>,
                      <Link
                        to="/search"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Search</Typography>
                        </MenuItem>
                      </Link>,
                    ]}
              </Menu>
            </Grid>

            <Grid xs={4} item sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "white" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Search</Typography>
                </MenuItem>
              </Link>
              {loggedIn && (
                <Link
                  to="/user"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                </Link>
              )}
            </Grid>

            <Grid
              xs={4}
              item
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    fontFamily: "Roboto",
                    fontWeight: 100,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Craft Beer
                </Typography>
              </Link>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link
                to={`${loggedIn ? "/user" : "/login"}`}
                style={{ textDecoration: "none" }}
              >
                {loggedIn ? (
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={profilePhoto} />
                  </IconButton>
                ) : (
                  <Button
                    variant="contained"
                    sx={[
                      { display: "flex", mx: "auto", bgcolor: "success.main" },
                      { "&:hover": { bgcolor: "success.dark" } },
                    ]}
                  >
                    Log in
                  </Button>
                )}
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
