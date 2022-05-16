import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface OrganizationCard {
  avatar: string;
  login: string;
  description?: string | null;
  link: string;
}

const OrganizationCard: FC<OrganizationCard> = ({
  avatar,
  login,
  description,
  link,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" alt="green iguana" height="140" image={avatar} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {login}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description || "The user has not description"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">See Organization</Button>
    </CardActions>
  </Card>
);

export default OrganizationCard;
