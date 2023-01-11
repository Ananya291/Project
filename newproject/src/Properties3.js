import React from "react";

class Properties3 extends React.Component {
  render() {
    return (
      <div>
        <h1>hey {this.props.text} friend</h1>
        <h1>I have {this.props.money}</h1>
      </div>
    );
  }
}

export default Properties3;
