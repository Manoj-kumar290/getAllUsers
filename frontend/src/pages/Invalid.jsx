import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Invalid.css';

const Invalid = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="card">
        <h1>404</h1>
        <h2>Lost in Space 🚀</h2>
        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button onClick={() => navigate('/login')}>
          Go Back Login
        </button>
      </div>
    </div>
  );
};

export default Invalid;