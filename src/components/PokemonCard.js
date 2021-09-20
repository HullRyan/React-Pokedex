import React from 'react';
import { Grid, Card, Avatar, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'
import LazyLoad from "react-lazyload";
import '../App.css';

const PokemonCard = (item, index) => {
    
    var img = require(`../data/icon/${item.name[0].replace('\'', '').replace('%','').replace(':','').replace('.','').replace(' ', '-').replaceAll('é','e').toLowerCase()}.png`);

    return (
      
      <Grid item md key={index} style={{marginLeft: "15px", marginTop: "15px"}}>
        <Card style={{width:"160px", height:"220.5px"}}>
        <CardHeader 
            avatar={
              <Avatar>{item.id}</Avatar>}
          title={item.name[0]}
        />
        <LazyLoad>
          <CardMedia
            style={{
                width: "100%", 
                height: "100%",
                marginLeft: "auto",
                marginTop:  "-25px",
                imageRendering: "pixelated",
            }}
            component="img"
            src={img.default}
            />
            </LazyLoad>
          <CardContent>
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
