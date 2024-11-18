import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Cards = (props) => {
  const [url, desc] = [props.url, props.desc];
  // console.log("url ", url, " desc ", desc);
  return (
    <>
      <Card sx={{ width: props.width, height: props.height }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={url}
            alt="green iguana"
          />
          {/* <CardContent>
            <Typography
              variant="body2"
              sx={{ color: "balck", fontSize: "20px", fontWeight: "700" }}
            >
              {desc}
            </Typography>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
