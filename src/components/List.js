import React, { Component, useState } from "react";
import { forceCheck } from "react-lazyload";
import { Grid, Card, CardContent, CardHeader, Avatar, CardMedia, Modal, Box, Typography } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import Header from "./Header";
import '../App.css';

let data = require("../data/pokemon.json");

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class List extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: "",
      open: false,
      setOpen: "",
      setIndex: null
    };

    this.filterData = this.filterData.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }

  handleOpen(index) {
    this.setState({
      setOpen: true,
      setIndex: index,
    });
  }
  handleClose() {
    this.setState({
      setOpen: false,
      setIndex: null
    });
  } 

  filterChange(a) {
    this.setState({
      searchTerm: a.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      forceCheck();
    }
  }

  filterData(data) {
    const searchTerm = String(this.state.searchTerm).toLowerCase();

    return data.filter((pokemon) => {
      const { name } = pokemon;

      return name[0].toLowerCase().includes(searchTerm);
    });
  }

  render() {
    const pokemon = this.filterData(data);
        return (
      <div>
        <Header isHome={true} filterChange={this.filterChange} />
        <Grid container>
          {pokemon.map((item, index) => 
          <Grid item md key={index} style={{marginLeft: "15px", marginTop: "15px"}}>
          <Card style={{width:"170px", height:"210px"}} onClick={() => this.handleOpen(index)}>
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
                  marginTop:  "-30px",
                  imageRendering: "pixelated",
              }}
              onClick={() => this.handleOpen()}
              component="img"
              src={require(`../data/icon/${item.name[0].replace('\'', '').replace('%','').replace(':','').replace('.','').replace(' ', '-').replaceAll('é','e').toLowerCase()}.png`).default}
              />
              </LazyLoad>
            <CardContent 
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "0",
                margin: "0"
              }}>
              <div className="typeDisplay" style={{backgroundColor: 'var(--' + item.type[0].toLowerCase() + ')'}}>{item.type[0]}</div>
              {item.type[1] > ""?
              <div className="typeDisplay" style={{backgroundColor: 'var(--' + item.type[1].toLowerCase() + ')'}}>{item.type[1]}</div>
              :<div/>}
            </CardContent>
            <Modal
              open={index === this.state.setIndex}
              onClose={() => this.handleClose()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
          </Card>
        </Grid>)}
        </Grid>
      </div>
    );
  }
}

export default List;
