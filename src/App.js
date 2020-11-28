import React from "react";
import "./App.css";
import propTypes from "prop-types";
import CarCard from "./components/card";
import { Button } from "@material-ui/core";
const data = false;

export default class App extends React.Component {
  state = {
    index: 0,
    newcar: "",
  };

  render() {
    console.log(this.state.index);
    return (
      <div>
        {data && (
          <>
            <h1>{this.state.newcar}</h1>
            {data.map((car, i) => (
              <Button type="button" onClick={() => this.setState({ index: i })}>
                {car.title}
              </Button>
            ))}
            <CarCard car={data[this.state.index]} />
            <input
              value={this.state.newcar}
              onChange={(event) =>
                this.setState({ newcar: event.target.value })
              }
            />
          </>
        )}
      </div>
    );
  }
}
