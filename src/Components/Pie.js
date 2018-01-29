import React, { Component } from 'react';
import * as d3 from 'd3';
import Slice from './Slice';

class Pie extends Component {
  constructor(props) {
    super(props);
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let {x, y, data} = this.props;
    let pie = d3.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* renders a slice for each data point */}
        {pie(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    let {innerRadius, outerRadius, padAngle, fill} = this.props;
    return (
      <Slice key={i}
             innerRadius={innerRadius}
             outerRadius={outerRadius}
             padAngle={padAngle}
             value={value}
             label={value.data}
             fill={fill[i]} />
    );
  }
}

export default Pie;
