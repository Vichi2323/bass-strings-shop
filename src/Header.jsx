import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HeadsetIcon from "@mui/icons-material/Headset";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <HeadsetIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Bass Strings Shop
        </Typography>
        <Typography
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Bass Shop
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Bass Strings</Button>
          <Button color="inherit">Cart</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
