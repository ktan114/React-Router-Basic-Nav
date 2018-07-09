import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="Links">
      <Link className="Links__Link" to="/">Home</Link>
      <Link className="Links__Link" to="/about">About</Link>
      <Link className="Links__Link" to="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;
