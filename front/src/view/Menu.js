import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Main</Link><br />
        <Link to="/notes">Notes</Link><br />
        <Link to="/cities">Cities</Link><br />
      </div>
    )
  }
}
