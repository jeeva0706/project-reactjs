
import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import {
  FaUserCircle,
  FaBars,
  FaAngleRight,
  FaAngleDown,
  FaAngleDoubleRight,
  FaListUl,
} from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { FaPencil } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiSave } from 'react-icons/bi';
import { BiSolidShare } from 'react-icons/bi';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import image_logo_data from '../Images/img/logo.png';
import admin_logo from '../Images/img/admin.png';
import '../Admincss/Categorie.css';

export const Categorie = () => {
  const [visibleSections, setVisibleSections] = useState({
    catalog: false,
    blog: false,
    course: false,
    form: false,
  });

  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState({ 1: false, 2: false, 3: false });
  const [showCategoryList, setShowCategoryList] = useState(false);

  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSelectAll = () => {
    const newState = !selectAll;
    const updatedCheckboxes = Object.keys(checkboxes).reduce((acc, key) => {
      acc[key] = newState;
      return acc;
    }, {});
    setSelectAll(newState);
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckboxChange = (key) => {
    const updatedCheckboxes = { ...checkboxes, [key]: !checkboxes[key] };
    setCheckboxes(updatedCheckboxes);

    const allChecked = Object.values(updatedCheckboxes).every((value) => value);
    setSelectAll(allChecked);
  };

  const toggleCategoryView = () => {
    setShowCategoryList((prev) => !prev);
  };

  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
    ],
  };

  return (
    <Container fluid className="header-section">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <div className="logo-admin-play ms-3">
            <img src={image_logo_data} alt="logo" className="dashboard-logo" />
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
          <Dropdown className="me-3">
            <Dropdown.Toggle
              variant="white"
              className="btn-lg admin-user-btn"
              id="dropdown-basic"
            >
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
          <span className="logout">
            <IoIosLogOut className="logout-icon" /> Logout
          </span>
        </Col>
      </Row>

      <Row>
        <Col md={2} className="column-left m-0 p-0">
          <div className="col-for-menu m-0 p-0">
            <div className="navigation-title">
              <FaBars /> NAVIGATION
            </div>

            <ul className="navigation-menu m-0 p-0">
              <li className="drop-down-value" onClick={() => navigate('/dashboard')}>
                <AiFillDashboard /> Dashboard
              </li>

              <li
                className="drop-down-value"
                onClick={() => toggleVisibility('catalog')}
              >
                Catalog{' '}
                {visibleSections.catalog ? (
                  <FaAngleDown className="icon-right-1" />
                ) : (
                  <FaAngleRight className="icon-right-1" />
                )}
              </li>
              {visibleSections.catalog && (
                <li className="dropdown-link" onClick={() => navigate('/categorie')}>
                  <FaAngleDoubleRight /> Categories
                </li>
              )}

              <li
                className="drop-down-value"
                onClick={() => toggleVisibility('blog')}
              >
                Blog{' '}
                {visibleSections.blog ? (
                  <FaAngleDown className="icon-right-2" />
                ) : (
                  <FaAngleRight className="icon-right-2" />
                )}
              </li>
              {visibleSections.blog && (
                <>
                  <li className="dropdown-link" onClick={() => navigate('/add-blog')}>
                    <FaAngleDoubleRight /> Add Blog
                  </li>
                  <li className="dropdown-link" onClick={() => navigate('/manage-blog')}>
                    <FaAngleDoubleRight /> Manage Blog
                  </li>
                </>
              )}

              <li
                className="drop-down-value"
                onClick={() => toggleVisibility('course')}
              >
                Course{' '}
                {visibleSections.course ? (
                  <FaAngleDown className="icon-right-3" />
                ) : (
                  <FaAngleRight className="icon-right-3" />
                )}
              </li>
              {visibleSections.course && (
                <>
                  <li className="dropdown-link" onClick={() => navigate('/add-course')}>
                    <FaAngleDoubleRight /> Add Course
                  </li>
                  <li className="dropdown-link" onClick={() => navigate('/manage-course')}>
                    <FaAngleDoubleRight /> Manage Course
                  </li>
                </>
              )}

              <li
                className="drop-down-value"
                onClick={() => toggleVisibility('form')}
              >
                Form{' '}
                {visibleSections.form ? (
                  <FaAngleDown className="icon-right-4" />
                ) : (
                  <FaAngleRight className="icon-right-4" />
                )}
              </li>
              {visibleSections.form && (
                <>
                  <li className="dropdown-link" onClick={() => navigate('/add-form')}>
                    <FaAngleDoubleRight /> Add Form
                  </li>
                  <li className="dropdown-link" onClick={() => navigate('/manage-form')}>
                    <FaAngleDoubleRight /> Manage
                  </li>
                </>
              )}
            </ul>
          </div>
        </Col>

        <Col className="market-data">
          <Container fluid>
            <div className="dashboard-value">
              <div className="dashvalue-2">
                <h4 className="dashboard-data">Dashboard</h4>
                <div className="home-to-dashboard">
                  <p className="dash-main-p ms-2">Home</p>
                  <LiaAngleRightSolid className="dash-main-icon ms-2" />
                  <p className="dash-main-p2 ms-2">Categories</p>
                </div>
              </div>
              <div className="text-end">
                {!showCategoryList ? (
                  <div className="three-icons">
                    <button className="icon-btn plus-icon" onClick={toggleCategoryView}>
                      <FaPlus />
                    </button>
                    <button className="icon-btn repeat-icon">
                      <BsArrowRepeat />
                    </button>
                    <button className="icon-btn btn-delete">
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                ) : (
                  <div className="three-icons">
                    <button className="icon-btn save-icon">
                      <BiSave />
                    </button>
                    <button className="icon-btn share-icon" onClick={toggleCategoryView}>
                      <BiSolidShare />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Container>
          <Row>
            {!showCategoryList ? (
              <Col className="table-data">
                <div className="container-for-cat">
                  <div className="categories-list">
                    <FaListUl /> Category List
                  </div>
                </div>
                <div className="second-container-cat">
                  <div className="table-content">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </td>
                          <td>
                            <h6>Category Name</h6>
                          </td>
                          <td>
                            <h6>Sort Order</h6>
                          </td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(checkboxes).map((key) => (
                          <tr key={key}>
                            <td>
                              <input
                                type="checkbox"
                                checked={checkboxes[key]}
                                onChange={() => handleCheckboxChange(key)}
                              />
                            </td>
                            <td>{`text${key}`}</td>
                            <td>{key}</td>
                            <td>
                              <div className="pencil-box">
                                <FaPencil />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            ) : (
              <div>
                <Col className="category-list d-block">
                  <FaPencil className="me-1" /> Add Category
                </Col>
                <Col className="div-2-category">
                  <span className="star-start">*</span>
                  <span className="ms-2 cat-name">Category Name</span>
                  <input
                    type="text"
                    className="ms-4 input-box"
                    placeholder="Category Name"
                  />
                </Col>
                <Col className="div-3-category">
                  <span className='description'>Description</span>
                  <div className="tools-div mt-3">
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      modules={modules}
                    />
                  </div>
                  
                </Col>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
