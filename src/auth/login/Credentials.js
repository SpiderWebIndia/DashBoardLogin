import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminLoginapi } from "../../apiconfig/authService";

const Credentials = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        const response = await AdminLoginapi({
          username: formValues.username,
          password: formValues.password,
        });

        if (response.message === undefined) {
          alert("Login Sucessfully");
          console.log(response);
          navigate("/dashboard");
          localStorage.setItem("image", response.image);
          localStorage.setItem("username", response.username);
          localStorage.setItem("token", response.token);
        } else {
          alert(response.message);
        }
        console.log(response.message);
      } catch (error) {}
    } else {
      // alert("No");
    }
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  // login api

  return (
    <>
      <div className="LoginPageMainDiv">
        <div className="LoginPageCenterDiv">
          <div className="HdingFrm">
            <h2> Login </h2>
          </div>

          <div className="FrmDtaShow">
            <form onSubmit={handleSubmit}>
              <div className="inputEmail">
                <label>
                  {" "}
                  Username: <span>kminchelle</span>{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p className="errormsg">{formErrors.username}</p>
              </div>

              <div className="inputEmail">
                <label> Just Validation Purpose Email Use </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="errormsg">{formErrors.email}</p>
              </div>

              <div className="inputEmail">
                <label>
                  {" "}
                  Password: <span>0lelplR</span>{" "}
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p className="errormsg">{formErrors.password}</p>
              </div>

              <div className="BtnData">
                <button type="submit"> Login </button>
              </div>
              <p>
                {" "}
                Api Link{" "}
                <NavLink to={"https://dummyjson.com/docs/auth"}>
                  {" "}
                  https://dummyjson.com/docs/auth{" "}
                </NavLink>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;
