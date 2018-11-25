import React from 'react';
import { Link } from 'react-router-dom';

const moscow = () => (
  <div>
    <Link to="/cities">To other cities</Link><br />
    <div>Name: Moscow <br /> Year: 1100</div>
  </div>
)

export default moscow;
