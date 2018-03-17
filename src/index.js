import React from "react";
require("normalize.css");
require("./assets/style.css");

export default class App extends React.Component {
  constructor() {
    super();
    localStorage.clear();
  }

  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}
