
'use client';
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton: React.FC = () => {
  const responseGoogle = async (response: any) => {
    console.log('Response:', response);

    if (response?.profileObj) {
      const id_token = response.tokenId;

      // Send the token to your backend for verification
      try {
        const res = await fetch('/api/auth/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken: id_token }),
        });

        if (res.ok) {
          // Redirect or perform any actions upon successful login
          window.location.href = '/callback';
        } else {
          console.error('Token verification failed');
        }
      } catch (error) {
        console.error('Error during token verification:', error);
      }
    }
  };

  const onError = (error: any) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleLogin
      clientId="422653780828-djdcn61s7f1ifculsfgb6ihsi6e0s2f3.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={onError}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
