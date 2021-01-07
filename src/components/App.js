import React from 'react';
import axios from 'axios';

import Header from './Header';
import Cards from './Cards';
import Selector from './Selector';
import Chart from './Chart';
import Footer from './Footer';

class App extends React.Component {
  state = { country: '', confirmed: '', active: '', deaths: '', recovered: '' };

  componentDidMount() {
    let url = `https://covid19.mathdro.id/api`;

    axios.get(url).then((response) => {
      const confirmed = response.data.confirmed.value;
      const deaths = response.data.deaths.value;
      const recovered = response.data.recovered.value;
      const active = confirmed - deaths - recovered;
      this.setState({
        country: '',
        confirmed: confirmed,
        deaths: deaths,
        recovered: recovered,
        active: active,
      });
    });
  }

  getValue = async (value) => {
    let url;
    await this.setState({ country: value });
    if (this.state.country !== '') {
      url = `https://covid19.mathdro.id/api/countries/${this.state.country}`;
    } else {
      url = `https://covid19.mathdro.id/api`;
    }
    await axios.get(url).then((response) => {
      //console.log(response);
      const confirmed = response.data.confirmed.value;
      const deaths = response.data.deaths.value;
      const recovered = response.data.recovered.value;
      const active = confirmed - deaths - recovered;
      this.setState({
        country: value,
        confirmed,
        deaths,
        recovered,
        active,
      });
    });
  };

  render() {
    return (
      <main>
        <Header />
        <Cards data={this.state} />
        <Selector getValue={this.getValue} />
        <Chart data={this.state} />
        <Footer />
      </main>
    );
  }
}
export default App;
