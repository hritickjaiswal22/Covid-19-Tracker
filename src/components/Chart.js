import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';

import '../styles/Chart.css';

class Chart extends React.Component {
  state = { bar: '', line: '' };

  fetchLineChart = () => {
    const url = 'https://covid19.mathdro.id/api/daily';
    axios.get(url).then((response) => {
      const data = response.data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));
      console.log(data);
      const lineChart = (
        <Line
          data={{
            labels: data.map(({ date }) => date),
            datasets: [
              {
                data: data.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              },
              {
                data: data.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
              },
            ],
          }}
        />
      );
      this.setState({ line: lineChart, bar: null });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log(this.props);
      if (this.props.data.country) {
        const barChart = (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths', 'Active'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)',
                    'rgba(242, 234, 0, 0.5)',
                  ],
                  hoverBackgroundColor: [
                    'rgba(0, 77, 153)',
                    'rgba(30, 102, 49)',
                    'rgba(255, 51, 51)',
                    'rgba(204, 153, 0)',
                  ],
                  data: [
                    this.props.data.confirmed,
                    this.props.data.recovered,
                    this.props.data.deaths,
                    this.props.data.active,
                  ],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `Current state in ${this.props.data.country}`,
              },
            }}
          />
        );
        this.setState({ bar: barChart, line: null });
      } else {
        this.fetchLineChart();
      }
    }
  }

  render() {
    return (
      <article className="ChartSection">
        {this.props.data.country ? this.state.bar : this.state.line}
      </article>
    );
  }
}

export default Chart;
