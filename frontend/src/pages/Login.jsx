import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    api.post("login/", { username, password }, { withCredentials: true })
      .then(() => navigate("/admin"))
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <section className="section">
        <div className='container has-text-centered'>
            <div className='column is-6 is-offset-3 p-4 my-6'>
                <h3 className='title has-text-black'>Login</h3>
                <hr className='login-hr' />
                <p className='subtitle has-text-black-light'>Please login to proceed.</p>
                <div className='box has-background-grey-light'>
                    <div className='field'>
                        <div className='control'>
                            <input className='input my-2 has-background-grey-lighter has-text-black is-large' type='text' placeholder='Username' autoFocus='' value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <input className='input has-text-black my-2 has-background-grey-lighter is-large' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button className='button cta-button is-large is-fullwidth' type='button' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
      {/* <div className="container">
        <h1 className="title">Admin Login</h1>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Username</label>
            <input className="input" value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="field">
            <label className="label">Password</label>
            <input className="input" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="button is-primary" type="submit">Login</button>
        </form>
      </div> */}
    </section>
  );
}
