'use client'
import React, { useEffect } from "react";

const GoogleLoginButton: React.FC = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api:client.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript();

    // Cleanup script on unmount
    return () => {
      const scriptTags = document.querySelectorAll(
        'script[src="https://apis.google.com/js/api:client.js"]'
      );
      scriptTags.forEach((tag) => tag.remove());
    };
  }, []);

  const handleClientLoad = () => {
    // @ts-expect-error
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "422653780828-djdcn61s7f1ifculsfgb6ihsi6e0s2f3.apps.googleusercontent.com",
      });
    });
  };

  const onSignIn = (googleUser: gapi.auth2.GoogleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    const id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  };

  const signIn = () => {
    handleClientLoad();
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(onSignIn);
  };

  return <button onClick={signIn}>Login with Google</button>;
};

export default GoogleLoginButton;
