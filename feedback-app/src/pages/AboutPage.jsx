import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React App to get feedback</p>
      <p>Version: 1.0.1 </p>

      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
