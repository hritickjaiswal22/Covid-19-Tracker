import React from 'react';

import '../styles/Cards.css';

class Cards extends React.Component {
  render() {
    return (
      <article className="CardsSection">
        <div className="FlexContainer">
          <div className="Card Card--infected">
            <h1 className="Card__Title">Infected</h1>
            <h1 className="Stat">{this.props.data.confirmed}</h1>
            <p className="Card__Description">
              Number of active cases of COVID-19
            </p>
          </div>

          <div className="Card Card--recovered">
            <h1 className="Card__Title">Recovered</h1>
            <h1 className="Stat">{this.props.data.recovered}</h1>
            <p className="Card__Description">
              Number of recoveries from COVID-19
            </p>
          </div>

          <div className="Card Card--deaths">
            <h1 className="Card__Title">Deaths</h1>
            <h1 className="Stat">{this.props.data.deaths}</h1>
            <p className="Card__Description">
              Number of deaths caused by COVID-19
            </p>
          </div>

          <div className="Card Card--active">
            <h1 className="Card__Title">Active</h1>
            <h1 className="Stat">{this.props.data.active}</h1>
            <p className="Card__Description">
              Number of Active Cases of COVID-19
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Cards;
