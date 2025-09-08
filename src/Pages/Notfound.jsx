import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

export default Notfound;