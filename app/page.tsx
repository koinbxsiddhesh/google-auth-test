// app/page.tsx

import React from 'react';
import GoogleLoginButton from '../components';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <GoogleLoginButton />
    </div>
  );
};

export default HomePage;
