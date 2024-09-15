import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

const Home = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

  );
};

export default Home;
