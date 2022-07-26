import React from "react";
import "./CardComponent.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardComponent = (props) => {
  return (
      <Card sx={{minWidth: 350, marginX: 2, padding: "10px"}}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="500"
                      image={props.card.images.small}
                      alt={props.card.name}
                      sx={{borderRadius: "13px"}}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {props.card.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Type: {props.card.types}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Number: {props.card.number}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Level: {props.card.level ? props.card.level : "Unknown"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          HP: {props.card.hp}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
  );
};

export default CardComponent;
