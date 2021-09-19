import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import LazyLoad from "react-lazyload";
import '../App.css';

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
            <div style={{backgroundColor: 'var(--' + item.type[0].toLowerCase() + ')'}}>{item.type[0]}</div>
            {item.type[1] > "" &&
            <div style={{backgroundColor: 'var(--' + item.type[1].toLowerCase() + ')'}}>{item.type[1]}</div>
            }
          </CardContent>
        </Card>
      </Grid>
    );
  };

export default PokemonCard;
