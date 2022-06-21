import { useEffect, useState } from "react";
import "./App.css";
import useForm from "./useForm";
import { initialValues, validate } from "./LoginForm";

function App() {
  const { handleChange, values, handleSubmit, errors, isSubmit } = useForm(
    validate,
    initialValues
  );

  const [ users, setUsers ] = useState([]);
 
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    }
  }, [errors]);

  return (
    <div className="container">
      {Object.keys(errors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <p>{errors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <p>{errors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <p>{errors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
