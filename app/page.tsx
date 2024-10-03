import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage: any = (error: any) => {
    console.log("error on",error);
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin login_uri="https://google-auth-test-alpha.vercel.app/api/callback"  onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
export default App;
