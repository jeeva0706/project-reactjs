
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import image_logo_data from "../Images/img/logo.png";
import admin_logo from "../Images/img/admin.png";

import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import { LiaAngleRightSolid } from "react-icons/lia";

import { FaUser } from "react-icons/fa";
import world_map from "../Images/img/worldmap.jpg";
import { PiUsersThreeFill } from "react-icons/pi";

import "../Admin/Dashboard.css";
// import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const navigate = useNavigate();
    // Toggle visibility function
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
                    <div className='logo-admin-play ms-3'>
                        <img src={image_logo_data} alt="logo" className="dashboard-logo" />
                    </div>
                </Col>

                {/* Admin Dropdown and Logout */}
                <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
                    <Dropdown className="me-3">
                        <Dropdown.Toggle
                            variant="white"
                            className="btn-lg admin-user-btn"
                            id="dropdown-basic"
                        >
                            <img
                                src={admin_logo}
                                className="image-admin-image"
                                alt="Admin Avatar"
                            />{' '}
                            Demo User
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
                    <span className="logout">
                        <IoIosLogOut className="logout-icon" /> Logout
                    </span>
                </Col>
            </Row>

            {/* Sidebar Navigation */}
            <Row>
                <Col md={2} className="column-left m-0 p-0">
                    <div className='col-for-menu m-0 p-0'>
                        <div className="navigation-title">
                            <FaBars /> NAVIGATION
                        </div>

                        <ul className="navigation-menu m-0 p-0">
                            {/* Dashboard Section */}
                            <li className='drop-down-value' onClick={() => navigate("/dashboard")}>
                                <AiFillDashboard /> Dashboard
                            </li>

                            {/* Catalog Section */}
                            <li
                                className="drop-down-value"
                                onClick={() => toggleVisibility('catalog')}
                            >
                                Catalog{' '}
                                {visibleSections.catalog ? <FaAngleDown className='icon-right-1' /> : <FaAngleRight className='icon-right-1' />}
                            </li>
                            {visibleSections.catalog && (
                                <li className="dropdown-link" onClick={() => navigate("/categorie")}>
                                    <FaAngleDoubleRight /> Categories
                                </li>
                            )}

                            {/* Blog Section */}
                            <li
                                className="drop-down-value"
                                onClick={() => toggleVisibility('blog')}
                            >
                                Blog{' '}
                                {visibleSections.blog ? <FaAngleDown className='icon-right-2' /> : <FaAngleRight className='icon-right-2' />}
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
                            <li
                                className="drop-down-value"
                                onClick={() => toggleVisibility('course')}
                            >
                                Course{' '}
                                {visibleSections.course ? <FaAngleDown className='icon-right-3' /> : <FaAngleRight className='icon-right-3' />}
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
                            <li
                                className="drop-down-value"
                                onClick={() => toggleVisibility('form')}
                            >
                                Form{' '}
                                {visibleSections.form ? <FaAngleDown className='icon-right-4' /> : <FaAngleRight className='icon-right-4' />}
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
                <Col className='market-data'>
                    <Container fluid>
                        <div className='dashboard-value'>
                            <div className='dashvalue-2'>
                                <h4 className="dashboard-data">
                                    Dashboard
                                </h4>
                                <div className='home-to-dashboard'>
                                    <p className="dash-main-p ms-2">Home</p>
                                    <LiaAngleRightSolid className="dash-main-icon ms-2" />
                                    <p className="dash-main-p2 ms-2">Dashboard</p>
                                </div>
                            </div>
                            <div className='text-end btn-for-button'>
                                <button className="settings-admin">
                                    <IoIosSettings className="settings-icon" />
                                </button>
                            </div>
                        </div>
                    </Container>
                    <Row>
                        <Col>
                            <div className="main-cart-1">
                                <div className="cart-1">
                                    TOTAL ORDERS <span className="span-number">0%</span>
                                </div>
                                <div className="cart-2">
                                    <FaShoppingCart className="icon-cart-1" />
                                    <h2 className="h2-numbers">757</h2>
                                </div>
                                <div className="cart-3">
                                    <p className="ms-2">View more...</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="main-cart-2">
                                <div className="cart-1">
                                    TOTAL SALES <span className="span-number">0%</span>
                                </div>
                                <div className="cart-2">
                                    <FaRegCreditCard className="icon-cart-1" /> <h2 className="h2-numbers">146.9k</h2>
                                </div>
                                <div className="cart-3">
                                    <p className="ms-2">View more...</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="main-cart-3">
                                <div className="cart-1">
                                    TOTAL CUSTOMERS <span className="span-number">0%</span>
                                </div>
                                <div className="cart-2">
                                    <FaUser className="icon-cart-1" /> <h2 className="h2-numbers">900</h2>
                                </div>
                                <div className="cart-3">
                                    <p className="ms-2">View more...</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="main-cart-4">
                                <div className="cart-1">
                                    PEOPLE ONLINE <span className="span-number">0%</span>
                                </div>
                                <div className="cart-2">
                                    <PiUsersThreeFill className="icon-cart-1" /> <h2 className="h2-numbers">7</h2>
                                </div>
                                <div className="cart-3">
                                    <p className="ms-2">View more...</p>
                                </div>
                            </div>
                        </Col>
                        <Row>
                            <Col>
                                <div className="map-main">
                                    <div className="admin-map">
                                        <TiWorld className="icon-world ms-3" />
                                        <h6 className="admin-map-h5 ms-2">
                                            World Map
                                        </h6>
                                    </div>
                                </div>
                                <div className="world-map-world">
                                    <img src={world_map} width={480} height={295} alt="map" />
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
