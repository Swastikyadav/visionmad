import React, { useState } from "react";

function NewsLetterForm() {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");

  const FORM_URL = "https://app.convertkit.com/forms/1938731/subscriptions";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(
        FORM_URL,
        {
          method: "post",
          body: data,
          headers: {
            accept: "application/json",
          },
        }
      );
      setEmail("");
      const json = await response.json();
      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch(err) {
      setStatus("ERROR");
      console.log(err);
    }
  }

  const handleChange = event => {
    const { value } = event.target;
    setEmail(value);
  }

  return (
    <>
      {status === 'SUCCESS' && <small style={{color: "green"}}>Success! Now check your email to confirm your subscription.</small>}
      {status === 'ERROR' && <p style={{color: "red"}}>Oops, Something went wrong! try again.</p>}
      <form
        action={FORM_URL}
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email_address"
          placeholder="Email to get notified"
          onChange={handleChange}
          value={email}
          required
        />
        <button className="sub-button" type="submit">Join Now</button>
      </form>
    </>
  );
}

export default NewsLetterForm;