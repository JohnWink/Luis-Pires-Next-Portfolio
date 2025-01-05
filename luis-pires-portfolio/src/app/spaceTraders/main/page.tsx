"use client";
import SpaceTraderButton from "@components/buttons/spaceTraderButton";
import { ChangeEvent, FormEvent, useState } from "react";
export default function Main() {
  async function onSubmitSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Starting");
    const formData = new FormData(event.currentTarget);
    console.log("formData:", formData);
    const response = await fetch("/api/spaceTraders", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  async function onSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  const [formType, setFormType] = useState<string>("login");
  return (
    <div className="main">
      <h1>Space Traders</h1>
      <div className="main-login">
        {formType === "login" && (
          <form onSubmit={onSubmitLogin}>
            <div className="main-login--body">
              <h2 style={{ textAlign: "center" }}>Login</h2>
              <input type="text" name="userName" placeholder="Username" />
              <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="main-login--footer">
              <button type="submit" className="button-primary--medium">
                <span>Log In</span>
              </button>
              <button
                type="button"
                className="button-primary--medium"
                onClick={() => setFormType("signup")}
              >
                <span>Sign Up</span>
              </button>
            </div>
          </form>
        )}
        {formType === "signup" && (
          <form onSubmit={onSubmitSignup}>
            <div className="main-login--body">
              <h2 style={{ textAlign: "center" }}>Sign Up</h2>
              <input type="text" name="callSign" placeholder="Your Call Sign" />
              <input type="text" name="userName" placeholder="New Username" />
              <input type="text" name="password" placeholder="New Password" />
            </div>
            <div className="main-login--footer">
              <button type="submit" className="button-primary--medium">
                <span>Confirm</span>
              </button>
              <button
                type="button"
                className="button-primary--medium"
                onClick={() => setFormType("login")}
              >
                <span>Go Back</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
