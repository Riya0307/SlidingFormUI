import React, { useState } from 'react';
import * as Components from './Components';
import './App.css';

const App = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Enter your name" />
          <Components.Input type="email" placeholder="Enter your email" />
          <Components.Input type="password" placeholder="Enter your password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign In</Components.Title>
          <Components.Input type="email" placeholder="Enter your email" />
          <Components.Input type="password" placeholder="Enter your password" />
          <Components.Anchor href="#">Forgot your Password ?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!!</Components.Title>
            <Components.Paragraph>
              To keep connected, please login with your information
            </Components.Paragraph>
            <Components.GhostButton onClick={toggleSignIn}>Sign In</Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello!!</Components.Title>
            <Components.Paragraph>
              Enter your personal details to start the journey with us!!
            </Components.Paragraph>
            <Components.GhostButton onClick={toggleSignIn}>Sign Up</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default App;
