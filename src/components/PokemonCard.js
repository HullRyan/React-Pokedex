import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import LazyLoad from "react-lazyload";

const PokemonCard = (item, index) => {
    
    var img = require(`../data/icon/${item.name[0].replace('\'', '').replace('%','').replace(':','').replace('.','').replace(' ', '-').replaceAll('é','e').toLowerCase()}.png`);
    
    return (
      
      <Grid item md key={index}>
        <Card style={{width:"150px", height:"220.5px"}}>
        <LazyLoad>
          <CardMedia
            style={{
                width: "100%", 
                height: "100%",
                margin: "auto",
                imageRendering: "pixelated",
            }}
            component="img"
            src={img.default}
            />
            </LazyLoad>
          <CardContent>
            <Typography>{item.name[0]}
            </Typography>
            {item.type[0]} {item.type[1]}
          </CardContent>
        </Card>
      </Grid>
    );
  };

export default PokemonCard;
