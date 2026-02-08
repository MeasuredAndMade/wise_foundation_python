import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="section fade-in">
      <div className="container has-text-centered">
        <h1 className="title has-text-grey-dark">Thank You!</h1>
        <p className="subtitle has-text-grey">
          Your message has been sent. We’ll get back to you shortly.
        </p>

        <p className="mt-4 has-text-grey">
          You will be redirected to the home page in a few seconds.
        </p>

        <p className="mt-2">
          If not, <a href="/" className="has-text-info return-link">click here to return home</a>.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
