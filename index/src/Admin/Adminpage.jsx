
import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { IoLockClosed } from "react-icons/io5";
import { FaKey, FaUserLarge, FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image_logo_data from "../Images/img/logo.png";
import "../Admin/Adminpage.css";

export const Adminpage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Input validation logic
  const validateInputs = () => {
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/; // Alphanumeric, at least 5 characters
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // At least 6 characters, 1 uppercase, 1 digit
    let usernameError = "";
    let passwordError = "";

    if (!usernameRegex.test(formData.username)) {
      usernameError = "Username must be at least 5 alphanumeric characters.";
    }
    if (!passwordRegex.test(formData.password)) {
      passwordError =
        "Password must be at least 6 characters long, include 1 uppercase letter and 1 number.";
    }

    setErrors({
      username: usernameError,
      password: passwordError,
    });

    return !usernameError && !passwordError;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Clear input fields
  const clearInputs = () => {
    setFormData({
      username: "",
      password: "",
    });
    setErrors({
      username: "",
      password: "",
    });
  };

  // Form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      alert("Login successful!");
      clearInputs();
      navigate("/dashboard");
    }
  };

  return (
    <div>
      {/* Admin login logo */}
      <Container fluid className="container-logo">
        <Row>
          <Col className="column-close">
            <img
              src={image_logo_data}
              className="logo-admin-logo"
              alt="logo-admin"
            />
          </Col>
        </Row>
      </Container>

      {/* Admin login form */}
      <Container>
        <div className="whole-data-div-input">
          <div className="lock-type mb-4">
            <h6>
              <IoLockClosed /> Please enter your login details.
            </h6>
          </div>

          <div className="container-input-group">
            <Form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="mb-4">
                <h6>Username</h6>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaUserLarge />
                  </InputGroup.Text>
                  <Form.Control
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <h6>Password</h6>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>

              {/* Forgotten Password */}
              <p className="p-color-bluer">Forgotten Password</p>

              {/* Submit Button */}
              <div className="text-end">
                <Button type="submit" className="btn-key-btn">
                  <FaKey /> Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};
