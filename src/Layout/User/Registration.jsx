import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Registration() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    mobile: '',
  };

  const validate = values => {
    const errors = {};

    if (!values.name) errors.name = 'Name is required';
    if (!values.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (!values.password) errors.password = 'Password is required';
    else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const apiUrl = 'http://192.168.0.118:5500/api/register';

      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        mobile: values.mobile.trim(),
      };

      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response Data:', response.data);

      if (response.status >= 200 && response.status < 300) {
        alert('Registration successful!');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);

      let errorMessage = 'An unexpected error occurred. Please try again later.';

      if (error.response) {
        if (error.response.data && error.response.data.error === 'User already exists') {
          errorMessage = 'User already exists, please use a different email or mobile number.';
        } else {
          errorMessage = error.response.data.message || error.response.data.error || 'There was an issue with your registration.';
        }
      } else if (error.request) {
        errorMessage = 'No response from the server. Please check your internet connection.';
      } else {
        errorMessage = error.message || 'An error occurred';
      }

      alert(`Registration failed: ${errorMessage}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <div style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "401", color: "red", padding: "3% 0%" }}>Pharmacist</div>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="images/Login.png" alt="House" className="img-fluid" />
            <div style={{ textAlign: "center", marginTop: "2%" }}>
              <div style={{ fontSize: "1.7rem", color: "#045E55", fontWeight: "600", padding: "0% 15%" }}>Welcome To Janhit Chemist</div>
              <div style={{ fontSize: "0.76rem", fontWeight: "600", marginBottom: "3%", padding: "0% 15%" }}>
                Sign up with us and get exclusive discounts and savings on medicines. Get express delivery in 2hrs.
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#F9F9F9", padding: "2%", paddingBottom: "10%", marginBottom: "3%" }} className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div style={{ fontSize: "2rem", color: "red", fontWeight: "600", marginBottom: "3%" }}>Sign Up</div>

            <Formik
              initialValues={initialValues}
              validate={validate} 
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-outline mb-4">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="NAME"
                      className="form-control form-control-lg"
                    />
                    <div className="text-danger"><ErrorMessage name="name" /></div>
                  </div>

                  <div className="form-outline mb-4" style={{ marginTop: "15px" }}>
                    <Field
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="MOBILE"
                      className="form-control form-control-lg"
                    />
                    <div className="text-danger"><ErrorMessage name="mobile" /></div>
                  </div>

                  <div className="form-outline mb-4" style={{ marginTop: "15px" }}>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="EMAIL"
                      className="form-control form-control-lg"
                    />
                    <div className="text-danger"><ErrorMessage name="email" /></div>
                  </div>

                  <div className="form-outline mt-4" style={{ marginTop: "15px" }}>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="PASSWORD"
                      className="form-control form-control-lg"
                    />
                    <div className="text-danger"><ErrorMessage name="password" /></div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: "15px" }}>
                    <Button
                      style={{ backgroundColor: "#045E55" }}
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      SHOP NOW
                    </Button>
                    <a style={{ textDecoration: "none", color: "#000", fontWeight: "500" }} href="#!">
                      Forgot password?
                    </a>
                  </div>

                  <div className="divider d-flex align-items-center my-4 height-0 border-black">
                    <p className="divider-or text-center fw-bold mx-3 mb-0 border-1">OR</p>
                  </div>

                  <div style={{ textDecoration: "none", color: "#000", fontWeight: "500", display: "flex", justifyContent: "space-between" }}>
                    Already have an account
                    <a style={{ textDecoration: "none", color: "#000", fontWeight: "500" }} href="#!">
                      Forgot password?
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
