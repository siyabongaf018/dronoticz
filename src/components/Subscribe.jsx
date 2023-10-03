import React, { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const HandleSubmit = () => {
    console.log(email);
    alert(email + " Success Subscribed");
    // toast.success( " Success Subscribed", {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
    setEmail("");
  };

  return (
    <section id="subscribe">
      <div className="subscribe__container">
        <h1>SUBSCRIBE</h1>
        <h3>Sign-up to our newsletter</h3>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={HandleSubmit}>SUBMIT</button>
      </div>
    </section>
  );
};

export default Subscribe;
