import React, { Component } from 'react';
import * as d3 from 'd3';
import Pie from './Components/Pie';
import Legend from './Components/Legend';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // gets 10 random integers between 100 and 1000
      data: Array.from({length: 10}, () => Math.floor(Math.random() * (1000-100+1))+100),
    }
    // gets 10 random colors from the ordinal color scale schemeCategory20b
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory20b.sort(() => Math.random() - 0.5));
    this.renderLegend = this.renderLegend.bind(this);
  }

  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let data = this.state.data.sort((a,b) =>{
      return a - b
    });

    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 2;
    // centers the pie chart
    let x = width / 2;
    let y = height / 2;
    // uses the same random color selection in order to pass it to the Pie child component
    let colors_data = data.map(this.renderLegend);
    let colors = colors_data.map((color) => {
      return color.props.fill;
    });

    return (

      <svg width='100%' height='100vh'>
        <Pie x={x}
             y={y}
             innerRadius={radius * .35}
             outerRadius={radius}
             padAngle={.01}
             data={data}
             fill={colors} />
        <g>
          {/* renders a legend line for each data point */}
          {data.map(this.renderLegend)}
        </g>
      </svg>
    );
  }

  renderLegend(value, i) {
    return (
      <Legend key={i}
           value={value}
           width={window.innerWidth/2+350}
           height={50+i*20}
           fill={this.colorScale(i)} />
    );
  }
}

export default App;
