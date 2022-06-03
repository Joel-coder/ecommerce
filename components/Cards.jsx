import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

const Cards = () => {
  const [favoriteIconColor, setFavoriteIconColor] = useState(undefined);
  const favoriteIconColorF = () => {
    favoriteIconColor === "red"
      ? setFavoriteIconColor(undefined)
      : setFavoriteIconColor("red");
  };
  return (
    <>
      <Card
        className="m-3 w-100 position-relative d-inline-block"
        sx={{ maxWidth: 250, minWidth: 200, maxHeight: 400 }}
      >
        <IconButton
          aria-label="add to favorites"
          className="position-absolute top-0 end-0"
          onClick={favoriteIconColorF}
        >
          <FavoriteIcon style={{ color: favoriteIconColor }} />
        </IconButton>
        <CardMedia
          component="img"
          height="194"
          image="https://aquascapinglove.com/wp-content/uploads/2019/11/what-is-aquascaping-learn-aquascaping-luis-cardoso.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
