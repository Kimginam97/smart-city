'use client'
import { Component } from 'react'
import Chart from 'react-apexcharts'

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: [],
      chartOptions: {}
    }
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions
    })
  }

  render() {
    return (
      <Chart options={this.state.chartOptions} series={this.state.chartData} type="bar" width="100%" height={350} />
    )
  }
}

export default BarChart
