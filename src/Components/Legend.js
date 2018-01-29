import React, { Component } from 'react';

class Legend extends Component {

  render() {
    let {value, width, height, fill} = this.props;

    return (
      <g transform={`translate(${width},${height})`}>
        <text x='16' y='9' >{value}</text>
        <rect x='2' y='-5' fillOpacity='0' height='18' width='60.671875'></rect>
        <line x1='0' y1='4' x2='10' y2='4' strokeWidth='10' stroke={fill}></line>
      </g>
    )
  };
}

export default Legend;
