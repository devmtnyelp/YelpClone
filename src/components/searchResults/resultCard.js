import React, { Component } from "react";

export default class resultCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{JSON.stringify(this.props)}</p>
        <p>hello</p>
      </div>
    );
  }
}
