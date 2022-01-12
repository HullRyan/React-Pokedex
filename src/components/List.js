import React from "react";
import { forceCheck } from "react-lazyload";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CardMedia,
  Modal,
} from "@mui/material";
import LazyLoad from "react-lazyload";
import { FixedSizeGrid } from "react-window";
import Header from "./Header";
import "../App.css";

const data = require("../data/pokemon.json");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class List extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      setOpen: "",
      setIndex: null,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    this.filterData = this.filterData.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.filterClear = this.filterClear.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
    this.setState({ windowHeight: window.innerHeight });
  };

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleOpen(index) {
    console.log(index);
    this.setState({
      setOpen: true,
      setIndex: index,
    });
  }
  handleClose() {
    console.log("handleClose called");
    this.setState({
      setOpen: false,
      setIndex: null,
    });
  }

  filterChange(a) {
    this.setState({
      searchTerm: a.target.value,
    });
  }

  filterClear() {
    this.setState({
      searchTerm: "",
    });
  }

  componentDidMount() {
    this.setState({
      searchTerm: "",
    });
    window.addEventListener("resize", this.handleResize);
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
        <Header
          isHome={true}
          filterChange={this.filterChange}
          filterClear={this.filterClear}
        />
        <div style={{ paddingTop: "60px" }}></div>
        <Grid container>
          {pokemon.map((item, index) => (
            <Grid
              item
              md
              key={index}
              style={{ marginLeft: "10px", marginTop: "15px" }}
            >
              <Card style={{ width: "170px", height: "210px" }}>
                <CardHeader
                  avatar={<Avatar>{item.id}</Avatar>}
                  title={item.name[0]}
                />
                <LazyLoad height={200}>
                  <CardMedia
                    onClick={() => this.handleOpen(index)}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginLeft: "auto",
                      marginTop: "-30px",
                      imageRendering: "pixelated",
                    }}
                    component="img"
                    src={
                      require(`../data/icon/${item.name[0]
                        .replace("'", "")
                        .replace("%", "")
                        .replace(":", "")
                        .replace(".", "")
                        .replace(" ", "-")
                        .replaceAll("é", "e")
                        .toLowerCase()}.png`).default
                    }
                  />
                </LazyLoad>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <div
                    className="typeDisplay"
                    style={{
                      backgroundColor:
                        "var(--" + item.type[0].toLowerCase() + ")",
                    }}
                  >
                    {item.type[0]}
                  </div>
                  {item.type[1] > "" ? (
                    <div
                      className="typeDisplay"
                      style={{
                        backgroundColor:
                          "var(--" + item.type[1].toLowerCase() + ")",
                      }}
                    >
                      {item.type[1]}
                    </div>
                  ) : (
                    <div />
                  )}
                </CardContent>
                <Modal
                  open={index === this.state.setIndex}
                  onClose={() => this.handleClose()}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Card sx={style}>
                    <CardHeader
                      className="bigCardTitle"
                      avatar={<Avatar>{item.id}</Avatar>}
                      title={item.name[0]}
                    />
                    <LazyLoad height={200}>
                      <CardMedia
                        onClick={() => this.handleOpen(index)}
                        style={{
                          width: "100%",
                          height: "100%",
                          marginLeft: "auto",
                          marginTop: "-30px",
                          imageRendering: "pixelated",
                        }}
                        component="img"
                        src={
                          require(`../data/icon/${item.name[0]
                            .replace("'", "")
                            .replace("%", "")
                            .replace(":", "")
                            .replace(".", "")
                            .replace(" ", "-")
                            .replaceAll("é", "e")
                            .toLowerCase()}.png`).default
                        }
                      />
                    </LazyLoad>
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          padding: "0",
                          margin: "0",
                        }}
                      >
                        <div
                          className="typeDisplay"
                          style={{
                            backgroundColor:
                              "var(--" + item.type[0].toLowerCase() + ")",
                          }}
                        >
                          {item.type[0]}
                        </div>
                        {item.type[1] > "" ? (
                          <div
                            className="typeDisplay"
                            style={{
                              backgroundColor:
                                "var(--" + item.type[1].toLowerCase() + ")",
                            }}
                          >
                            {item.type[1]}
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                      <div
                        className="defenseDisplay"
                        style={{
                          margin: "auto",
                        }}
                      >
                        Defenses
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          <div className="defenseDisplay">Weak To:</div>

                            {
                              //console.log(item.defense)
                              item.defense.map((type, number) => {
                                let weak = [];
                                for (const [key, value] of Object.entries(type)) {
                                  //console.log(`${key}: ${value}`);
                                  if(value > 1) {
                                    weak.push(
                                    <div
                                      className="defenseDisplay"
                                      style={{
                                        backgroundColor:
                                          "var(--" + key.toLowerCase() + ")",
                                      }}
                                    >
                                      {key}:   x{value}
                                    </div>);
                                  }
                                }
                                return (weak);
                              })
                            }
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          <div className="defenseDisplay">Strong Against:</div>
                          {
                              //console.log(item.defense)
                              item.defense.map((type, number) => {
                                let weak = [];
                                for (const [key, value] of Object.entries(type)) {
                                  //console.log(`${key}: ${value}`);
                                  if(value < 1) {
                                    weak.push(
                                    <div
                                      className="defenseDisplay"
                                      style={{
                                        backgroundColor:
                                          "var(--" + key.toLowerCase() + ")",
                                      }}
                                    >
                                      {key}:   x{value}
                                    </div>);
                                  }
                                }
                                return (weak);
                              })
                            }
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Modal>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default List;
