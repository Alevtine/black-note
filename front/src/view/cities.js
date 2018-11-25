import React from 'react';
import { Link } from 'react-router-dom';

const cities = () => {
  const cities = ['Piter', 'Moscow', 'Tula', 'Olenegorsk', 'Ozersk', 'London'];
  const citylinks = cities.map((city, i) => {
    const path = `/city/${i}`;
    return <Link key={i} to={path}><br/>{city}</Link>
  })
  return citylinks;
}

export default cities;
