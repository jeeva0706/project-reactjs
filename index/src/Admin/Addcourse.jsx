import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import image_logo_data from "../Images/img/logo.png";
import admin_logo from "../Images/img/admin.png";

import { FaUserCircle, FaBars, FaAngleDoubleRight, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";

import "../Admin/Dashboard.css";

export const Addcourse = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const navigate = useNavigate();

    // Toggle visibility for collapsible sections
    const toggleVisibility = (key) => {
        setVisibleSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <Container fluid className="header-section">
            {/* Header Section */}
            <Row className="align-items-center">
                {/* Company Logo */}
                <Col xs={12} md={6}>
                    <div className="logo-admin-play ms-3">
                        <img src={image_logo_data} alt="logo" className="dashboard-logo" />
                    </div>
                </Col>

                {/* Admin Dropdown and Logout */}
                <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
                    <Dropdown className="me-3">
                        <Dropdown.Toggle variant="white" className="btn-lg admin-user-btn" id="dropdown-basic">
                            <img src={admin_logo} className="image-admin-image" alt="Admin Avatar" /> Demo User
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <FaUserCircle /> Your Profile
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Store</Dropdown.Item>
                            <Dropdown.Item href="#">My Demo Shop</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="logout" onClick={() => navigate("/logout")}>
                        <IoIosLogOut className="logout-icon" /> Logout
                    </span>
                </Col>
            </Row>

            {/* Sidebar Navigation */}
            <Row>
                <Col md={2} className="column-left m-0 p-0">
                    <div className="col-for-menu m-0 p-0">
                        <div className="navigation-title">
                            <FaBars /> NAVIGATION
                        </div>

                        <ul className="navigation-menu m-0 p-0">
                            {/* Dashboard Section */}
                            <li className="drop-down-value" onClick={() => navigate("/dashboard")}>
                                <AiFillDashboard /> Dashboard
                            </li>

                            {/* Catalog Section */}
                            <li className="drop-down-value" onClick={() => toggleVisibility("catalog")}>
                                Catalog {visibleSections.catalog ? <FaAngleDown /> : <FaAngleRight />}
                            </li>
                            {visibleSections.catalog && (
                                <li className="dropdown-link" onClick={() => navigate("/categorie")}>
                                    <FaAngleDoubleRight /> Categories
                                </li>
                            )}

                            {/* Blog Section */}
                            <li className="drop-down-value" onClick={() => toggleVisibility("blog")}>
                                Blog {visibleSections.blog ? <FaAngleDown /> : <FaAngleRight />}
                            </li>
                            {visibleSections.blog && (
                                <>
                                    <li className="dropdown-link" onClick={() => navigate("/add-blog")}>
                                        <FaAngleDoubleRight /> Add Blog
                                    </li>
                                    <li className="dropdown-link" onClick={() => navigate("/manage-blog")}>
                                        <FaAngleDoubleRight /> Manage Blog
                                    </li>
                                </>
                            )}

                            {/* Course Section */}
                            <li className="drop-down-value" onClick={() => toggleVisibility("course")}>
                                Course {visibleSections.course ? <FaAngleDown /> : <FaAngleRight />}
                            </li>
                            {visibleSections.course && (
                                <>
                                    <li className="dropdown-link" onClick={() => navigate("/add-course")}>
                                        <FaAngleDoubleRight /> Add Course
                                    </li>
                                    <li className="dropdown-link" onClick={() => navigate("/manage-course")}>
                                        <FaAngleDoubleRight /> Manage Course
                                    </li>
                                </>
                            )}

                            {/* Form Section */}
                            <li className="drop-down-value" onClick={() => toggleVisibility("form")}>
                                Form {visibleSections.form ? <FaAngleDown /> : <FaAngleRight />}
                            </li>
                            {visibleSections.form && (
                                <>
                                    <li className="dropdown-link" onClick={() => navigate("/add-form")}>
                                        <FaAngleDoubleRight /> Add Form
                                    </li>
                                    <li className="dropdown-link" onClick={() => navigate("/manage-form")}>
                                        <FaAngleDoubleRight /> Manage
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </Col>

                {/* Main Content Area */}
                <Col className="market-data">
                    <Container fluid>
                        <div className="dashboard-value">
                            <div className="dashvalue-2">
                                <h4 className="dashboard-data">AddCourse</h4>
                                <div className="home-to-dashboard">
                                    <p className="dash-main-p ms-2">Home</p>
                                    <LiaAngleRightSolid className="dash-main-icon ms-2" />
                                    <p className="dash-main-p2 ms-2">Add course</p>
                                </div>
                            </div>
                            <div className="text-end btn-for-button">
                                <button className="settings-admin">
                                    <IoIosSettings className="settings-icon" />
                                </button>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
