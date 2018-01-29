import React, { Component } from 'react';

class Legend extends Component {

  render() {
    let {value, height, fill} = this.props;

    return (
      <g transform={`translate(200,${height})`}>
        <text x='647.375' y='9' >{value}</text>
        <rect x='633.375' y='-5' fillOpacity='0' height='18' width='60.671875'></rect>
        <line x1='631.375' y1='4' x2='641.375' y2='4' strokeWidth='10' stroke={fill}></line>
      </g>
    )
  };
}

export default Legend;
