import { Headset } from "@mui/icons-material";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{
        height: "60px",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      elevation={3}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{
                opacity: "0.6",
              }}
            >
              <Headset />
            </IconButton>
            Copyright ©2023.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
