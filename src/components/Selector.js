import React from 'react';
import axios from 'axios';

import '../styles/Selector.css';

class Selector extends React.Component {
  state = { countries: [] };

  componentDidMount() {
    axios.get('https://covid19.mathdro.id/api/countries').then((response) => {
      //console.log(response.data.countries);
      this.setState({
        countries: response.data.countries,
      });
    });
  }

  selectedValue = () => {
    const value = document.getElementById('countries').value;
    //console.log(this.props);
    this.props.getValue(value);
  };

  render() {
    return (
      <div className="Selector">
        <label htmlFor="countries">Choose a Country:</label>
        <select id="countries" onChange={this.selectedValue}>
          <option value="" key="Global" defaultValue>
            Global
          </option>
          {this.state.countries.map((country) => (
            <option value={country.name} key={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Selector;
