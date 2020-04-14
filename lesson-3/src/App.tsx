import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld/HelloWorld";

export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld user="Magomed" />
      </div>
    );
  }
}
