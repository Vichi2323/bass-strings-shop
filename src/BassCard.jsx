import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function BassStringsCard() {
  return (
    <Box
      width={"300px"}
      sx={{
        margin: "20px",
        padding: "20px",
        width: 300,
        height: 300,
      }}
    >
      <Card>
        <CardMedia
          component={"img"}
          height={"200px"}
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            Bass strings
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam cumque
            error optio ratione aperiam quam ea id reprehenderit neque! Est
            excepturi natus ad. Totam sit adipisci deleniti rem. Obcaecati,
            necessitatibus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">details</Button>
          <Button size="small">add to cart</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BassStringsCard;
